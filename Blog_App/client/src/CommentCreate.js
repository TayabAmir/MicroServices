import axios from 'axios';
import React, { useState } from 'react'

const CommentCreate = ({postId}) => {

    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`http://posts.com/posts/${postId}/comments`, {content})
        setContent('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>New Comment</label>
                    <input value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button className='btn btn-primary'>Enter</button>
            </form>
    </div>
  )
}

export default CommentCreate