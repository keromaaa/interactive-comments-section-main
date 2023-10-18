import { data } from 'autoprefixer'
import React, { useRef } from 'react'
import axios from 'axios'
import useComments from '../../hooks/useComments'

const AddComment = ({ currentUser, parentId, onClose }) => {
  const inputRef = useRef()

  const createComment = (e) => {
    e.preventDefault()

    const comment = {
      userId: currentUser.id,
      content: inputRef.current.value,
      createdAt: "2023-10-02T21:29:30.507Z",
      score: 0,
      replies: [],
      parentId: parentId
    }

    console.log(comment)

    if (comment.content === '') {
      inputRef.current.classList.add('border-soft-red')
      inputRef.current.classList.add('focus:border-soft-red')
      inputRef.current.placeholder = "Comment can't be blank"
    }
    else {
      inputRef.current.classList.remove('border-soft-red')
      inputRef.current.classList.remove('focus:border-soft-red')
      inputRef.current.placeholder = "Add a comment..."

      axios.post("https://localhost:7218/api/Comments/Create/", comment, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => response.data)
        .then(data => console.log(data))
        .catch(err => console.log(err.message))

      inputRef.current.value = ''
    }
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      createComment(e)
    }
  }

  return (
    <div className='bg-white w-full h-fit rounded-lg p-4 shadow-sm flex flex-col lg:flex-row items-end lg:items-start gap-4 relative' >
      <img className='h-10 absolute left-6 bottom-6 lg:top-6 lg:bottom-auto' src="../images/avatars/image-amyrobson.png" alt="" />
      <form className='flex flex-col lg:flex-row items-end lg:items-start w-full lg:ml-16 gap-4' onSubmit={(e) => handleSubmit(e)}>
        <textarea
          ref={inputRef}
          className='rounded-md border-[1px] outline-none resize-none border-light-gray focus:border-moderate-blue w-full px-4 py-2  text-dark-blue'
          name=""
          id=""
          cols='1'
          rows='5'
          placeholder='Add a comment...'>
        </textarea>
        <input onClick={(e) => { createComment(e); onClose }} className='rounded-md bg-moderate-blue hover:bg-light-grayish-blue text-white px-6 py-3 w-fit h-fit font-medium cursor-pointer select-none' type="submit" value="SEND" />
      </form>
    </div >
  )
}

export default AddComment