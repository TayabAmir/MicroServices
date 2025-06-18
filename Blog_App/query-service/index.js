const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express();
app.use(bodyParser.json())
app.use(cors())

const posts = {};

const handleEvent = (type, data) => {
    if (type == "PostCreated") {
        const { id, title } = data

        posts[id] = { id, title, comments: [] }
    } else if (type == "CommentCreated") {
        const { id, content, postId, status } = data
        posts[postId].comments.push({ id, content, status })
    } else if (type == "CommentUpdated") {
        const { id, content, postId, status } = data
        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        })
        comment.status = status;
        comment.content = content;
    }
}

app.post("/events", (req, res) => {
    const { type, data } = req.body
    console.log(`Event Recieved: ${type}`)
    handleEvent(type, data);
    res.send({})
})

app.get("/posts", (req, res) => {
    res.send(posts)
})

app.listen(4002, async () => {
    console.log("Listening on 4002")

    const { data } = await axios.get("http://event-bus-srv:4005/events");

    for (let event of data) {
        console.log("Processing Event", event.type)
        handleEvent(event.type, event.data)
    }
})