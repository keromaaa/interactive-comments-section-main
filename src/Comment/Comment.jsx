import React from 'react'
import Upvotes from '../Upvotes/Upvotes'

const Comment = ({ id, user, content, createdAt, score, replies, parentId }) => {
  const handleDelete = () => {
    console.log('delete')


  }

  return (
    <div>
      <div className='bg-white w-full h-fit rounded-lg p-4 shadow-sm flex flex-col lg:flex-row items-start gap-4 relative'>
        <div className='flex flex-col text-base gap-4'>
          <div className='flex gap-4 items-center h-fit'>
            <img className='h-10' src="../images/avatars/image-amyrobson.png" alt="" />
            <div className="flex items-center gap-3">
              <span className='font-medium text-dark-blue'>{'mr.ahmed'}</span>
              <div className='bg-moderate-blue text-white text-xs rounded-sm px-1 h-5 flex items-center'>you</div>
            </div>
            <span className='font-normal text-grayish-blue'>{createdAt}</span>
          </div>
          <p className='font-normal text-grayish-blue'>{content}</p>
        </div>
        <Upvotes upvotes={score} />
        <div className='absolute bottom-6 right-6 lg:top-6 lg:bottom-auto flex gap-4'>
          <div className="flex items-center gap-1 group cursor-pointer" onClick={handleDelete}>
            <svg className='fill-soft-red group-hover:fill-pale-red' width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="inherit" /></svg>
            <div className='text-soft-red font-medium group-hover:text-pale-red select-none'>Delete</div>
          </div>
          <div className="flex items-center gap-1 group cursor-pointer">
            <svg className='fill-moderate-blue group-hover:fill-light-grayish-blue' width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="inherit" /></svg>
            <div className='text-moderate-blue font-medium group-hover:text-light-grayish-blue select-none'>Edit</div>
          </div>
        </div>
      </div >
      <div className='border-l border-light-gray'>
        {
          replies && replies.map((el) => {
            <Comment id={el.id} content={el.content} createdAt={el.createdAt} score={el.score} replies={el.replies} parentId={el.parentId} key={el.id} />
          })
        }
      </div>
    </div>
  )
}

export default Comment