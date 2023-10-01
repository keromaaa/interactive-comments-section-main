import React from 'react'
import Comment from '../Comment/Comment'
import AddComment from '../AddComment/AddComment'

const CommentSection = () => {
  const comments = [
  ]

  return (
    <div className='w-full max-w-[600px] px-[15px] py-6 lg:max-w-[750px] h-screen flex flex-col gap-4'>
      <Comment />
      <AddComment />
    </div>
  )
}

export default CommentSection