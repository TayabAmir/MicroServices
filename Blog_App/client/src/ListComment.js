import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ListComment = ({comments}) => {
    const rComments = comments.map(comment => {
      let content;
      if(comment.status === "approved") content = comment.content;
      else if(comment.status === "pending") content = "Waiting for moderation";
      else content = "Comment deleted due to policies";
        return <li key={comment.id}>{content}</li>
    })
    return (
    <div>{rComments}</div>
  )
}

export default ListComment