import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import ListComment from './ListComment'

const GetPosts = () => {
    const [posts, setPosts] = useState({})
    const fetchPosts = async () => {
        const { data } = await axios.get("http://localhost:4002/posts")
        console.log(data)
        setPosts(data)
    }
    useEffect(() => {
        fetchPosts();
    }, [])

    const renderedPosts = Object.values(posts).map((post) => {
        return <div className='card' style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
            <div className='card-body'>
                <h3>{post.title}</h3>
                <ListComment comments={post.comments}/>
                <CommentCreate postId={post.id}/>
            </div>
        </div>
    });
    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>   
            {renderedPosts}
        </div>
    )
}

export default GetPosts