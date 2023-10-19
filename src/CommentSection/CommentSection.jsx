import React, { useEffect, useState } from 'react'
import Comment from '../Comment/Comment'
import AddComment from '../AddComment/AddComment'
import useComments from '../../hooks/useComments'
import useUsers from '../../hooks/useUsers'
import axios from 'axios'

const CommentSection = () => {
  const { comments, getComments } = useComments()

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    axios
      .get("https://localhost:7218/api/Users/Get?id=2", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => response.data)
      .then(data => setCurrentUser(data.value))
      .catch(err => console.log(err))
    console.log(currentUser)
  }, [])

  useEffect(() => {
    getComments()
  }, [comments])

  return (
    <div className='w-full max-w-[600px] px-[15px] py-6 lg:max-w-[750px] h-screen flex flex-col gap-4'>
      {
        comments && comments.map((el) => {
          return <Comment currentUser={currentUser} comment={el} key={el.id} />
        })
      }
      <AddComment currentUser={currentUser} />
    </div>
  )
}

export default CommentSection