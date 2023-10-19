import React, { useEffect, useState, useRef } from 'react'
import Upvotes from '../Upvotes/Upvotes'
import Modal from '../Modal/Modal'
import useComments from '../../hooks/useComments'
import axios from 'axios'
import EditComment from '../EditComment/EditComment'
import useUsers from '../../hooks/useUsers'
import AddComment from '../AddComment/AddComment'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const Comment = ({ currentUser, comment }) => {
  const { getComments } = useComments()
  const [editing, setEditing] = useState(false)
  const [replying, setReplying] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({})

  dayjs.extend(relativeTime)

  const createdTime = dayjs(comment.createdAt).fromNow()

  useEffect(() => {
    axios
      .get(`https://localhost:7218/api/Users/Get?id=${comment.userId}`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => response.data)
      .then(data => setUser(data.value))
      .catch(err => console.log(err))
  }, [])

  const deleteComment = () => {
    axios
      .delete(`https://localhost:7218/api/Comments/Delete?id=${comment.id}`)
      .then(response => response.data)
      .then(data => data.data)
      .catch(err => console.log(err))
      .finally(() => getComments())
  }

  const handleEditClick = () => {
    setEditing(!editing)
  }

  const handleReplyClick = () => {
    setReplying(!replying)
  }

  return (
    <div className='flex flex-col gap-4'>
      <Modal open={isOpen}>
        <div className='flex flex-col gap-4 w-[400px]'>
          <h2 className='font-bold text-2xl text-dark-blue'>Delete comment</h2>
          <p className='text-grayish-blue'>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
          <div className="flex justify-between mt-2">
            <button className='bg-grayish-blue hover:bg-opacity-50 text-white font-bold p-4 rounded-lg'
              type="button"
              onClick={() => setIsOpen(false)}>NO, CANCEL</button>
            <button className='bg-soft-red hover:bg-pale-red text-white font-bold p-4 rounded-lg'
              type="button"
              onClick={() => {
                deleteComment();
                setIsOpen(false)
              }}>YES, DELETE</button>
          </div>
        </div>
      </Modal>
      <div className='bg-white w-full h-fit rounded-lg p-4 shadow-sm flex flex-col lg:flex-row items-start gap-4 relative'>
        <div className='flex flex-1 flex-col w-full text-base gap-4'>
          <div className='flex gap-4 items-center h-fit flex-wrap'>
            <img className='h-10' src="../images/avatars/image-amyrobson.png" alt="" />
            <div className="flex items-center gap-3">
              <span className='font-medium text-dark-blue'>{user.username}</span>
              {
                user.id === currentUser.id &&
                <div className='bg-moderate-blue text-white text-xs rounded-sm px-1 h-5 flex items-center'>you</div>
              }
            </div>
            <span className='font-normal text-grayish-blue'>{createdTime}</span>
          </div>
          {
            editing ?
              <EditComment
                comment={comment}
                onEdit={() => setEditing(!editing)}
              /> :
              <p className='font-normal text-grayish-blue'>{comment.content}</p>
          }
        </div>
        <Upvotes comment={comment} />
        <div className='absolute bottom-6 right-6 lg:top-6 lg:bottom-auto flex gap-4'>
          {
            currentUser.id === user.id &&
            <div className="flex items-center gap-1 group cursor-pointer" onClick={() => setIsOpen(true)}>
              <svg className='fill-soft-red group-hover:fill-pale-red' width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="inherit" /></svg>
              <div className='text-soft-red font-medium group-hover:text-pale-red max-[300px]:hidden select-none'>Delete</div>
            </div>
          }
          {
            currentUser.id === user.id &&
            <div className="flex items-center gap-1 group cursor-pointer" onClick={handleEditClick}>
              <svg className='fill-moderate-blue group-hover:fill-light-grayish-blue' width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="inherit" /></svg>
              <div className='text-moderate-blue font-medium group-hover:text-light-grayish-blue max-[250px]:hidden select-none'>Edit</div>
            </div>
          }
          {
            currentUser.id !== user.id &&
            <div className='flex items-center gap-1 group cursor-pointer' onClick={handleReplyClick}>
              <svg className='fill-moderate-blue group-hover:fill-light-grayish-blue' width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="inherit" /></svg>
              <div className='text-moderate-blue font-medium group-hover:text-light-grayish-blue max-[250px]:hidden select-none'>Reply</div>
            </div>
          }
        </div>
      </div >
      {
        (replying || comment.replies) &&
        <div className='flex flex-col border-l-4 border-light-gray pl-8 ml-8 gap-4'>
          {
            comment.replies.map((el) => {
              return <Comment currentUser={currentUser} comment={el} key={el.id} />
            })
          }
          {
            replying &&
            <AddComment currentUser={currentUser} parentId={comment.id} onClose={() => setReplying(false)} />
          }
        </div>
      }








      {/* {
        <div className='flex flex-col'>
          <div className='border-l-4 border-light-gray pl-8 ml-8 flex flex-col' />
          {
            comment.replies.count > 0 &&
            <div className='w-full'>
              {
                comment.replies.map((el) => {
                  return <Comment currentUser={currentUser} comment={el} key={el.id} />
                })
              }
            </div>
          }
          {
            replying &&
            <AddComment currentUser={currentUser} parentId={comment.id} />
          }
        </div>} */}
    </div>
  )
}

export default Comment