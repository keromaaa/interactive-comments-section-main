import React, { useRef } from 'react'

const EditComment = ({ onSubmit, content, setContent, onClick }) => {
  const inputRef = useRef()

  const setError = () => {
    if (content === '') {
      inputRef.current.classList.add('border-soft-red')
      inputRef.current.classList.add('focus:border-soft-red')
      inputRef.current.placeholder = "Comment can't be blank"
    }
    else {
      inputRef.current.classList.remove('border-soft-red')
      inputRef.current.classList.remove('focus:border-soft-red')
      inputRef.current.placeholder = "Edit your comment..."
    }
  }

  return (
    <form className='flex flex-col w-full items-end gap-4' onSubmit={onSubmit}>
      <textarea
        ref={inputRef}
        className='rounded-md border-[1px] outline-none resize-none border-light-gray focus:border-moderate-blue w-full px-4 py-2 text-dark-blue'
        name=""
        id=""
        cols='1'
        rows='5'
        placeholder='Edit your comment...'
        value={content}
        onChange={setContent}>
      </textarea>
      <input onClick={() => { onClick(); setError() }} className='rounded-md bg-moderate-blue hover:bg-light-grayish-blue text-white px-6 py-3 w-fit h-fit font-medium cursor-pointer select-none' type="submit" value="UPDATE" />
    </form>
  )
}

export default EditComment