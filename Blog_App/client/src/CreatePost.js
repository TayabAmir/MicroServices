import React, { useState } from 'react'
import axios from 'axios'


const CreatePost = () => {
    const [title, setTitle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title) return;
        await axios.post("http://posts.com/posts/create", {title}, {
            headers : {
                "Content-Type": "application/json"
            }
        })
        setTitle('')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <button className='btn btn-primary'>Create</button>
            </form>
        </div>
    )
}

export default CreatePost