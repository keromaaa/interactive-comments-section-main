import React from 'react'
import Comment from '../Comment/Comment'
import AddComment from '../AddComment/AddComment'
import CommentProvider, { CommentContext } from '../../context/CommentContext'
import useComments from '../../hooks/useComments'

const CommentSection = () => {
  const { comments } = useComments()


  return (
    <div className='w-full max-w-[600px] px-[15px] py-6 lg:max-w-[750px] h-screen flex flex-col gap-4'>
      {
        comments && comments.map((el) => {
          return <Comment id={el.id} content={el.content} createdAt={el.createdAt} score={el.score} replies={el.replies} parentId={el.parentId} key={el.id} />
        })}
      <AddComment />
    </div>
  )
}

export default CommentSection