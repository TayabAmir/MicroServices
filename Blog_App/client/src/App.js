import React from 'react'
import CreatePost from "./CreatePost";
import GetPosts from './GetPosts';

const App = () => {
  return (
    <div>
      <div>
        <h1>Create Post</h1>
        <CreatePost />
        <hr/>
        <h1>Posts</h1>
        <GetPosts/>
      </div>
    </div>
  )
}

export default App