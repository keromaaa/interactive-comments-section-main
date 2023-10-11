import React, { useEffect } from 'react'
import Comment from '../Comment/Comment'
import AddComment from '../AddComment/AddComment'
import CommentProvider, { CommentContext } from '../../context/CommentContext'
import useComments from '../../hooks/useComments'

const CommentSection = () => {
  const { comments, getComments } = useComments()

  useEffect(() => {
    getComments()
  }, [comments])

  return (
    <div className='w-full max-w-[600px] px-[15px] py-6 lg:max-w-[750px] h-screen flex flex-col gap-4'>
      {
        comments && comments.map((el) => {
          return <Comment comment={el} key={el.id} />
        })}
      <AddComment />
    </div>
  )
}

export default CommentSection