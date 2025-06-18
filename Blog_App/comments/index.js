const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express();
app.use(bodyParser.json())
app.use(cors())

const commentsbyPostId = {}

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsbyPostId[req.params.id] || [])
})

app.post("/posts/:id/comments", async (req, res) => {
    const comId = randomBytes(4).toString('hex')
    const { content } = req.body;
    const cmt = { id: comId, content, status: 'pending' };
    const comments = commentsbyPostId[req.params.id]

    if (comments)
        commentsbyPostId[req.params.id].push(cmt);
    else
        commentsbyPostId[req.params.id] = [cmt]

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'CommentCreated',
        data: { id: comId, content, postId: req.params.id, status: 'pending' }
    })

    res.status(201).send(commentsbyPostId[req.params.id])
})

app.post('/events', async (req, res) => {
    const { type, data } = req.body
    console.log(`Event Recieved: ${type}`)
    if (type == 'CommentModerated') {
        const { postId, id, status } = data;

        const comments = commentsbyPostId[postId];

        const comment = comments.find(comment => {
            return comment.id === id
        });

        comment.status = status;

        await axios.post('http://event-bus-srv:4005/events', {
            type: 'CommentUpdated',
            data: { id, content: data.content, postId, status: comment.status }
        })
    }
    res.send({})
})

app.listen(4001, () => {
    console.log("Listening on Port 4001")
})