import React, { useRef, useState } from 'react'
import axios from 'axios'
import useComments from '../../hooks/useComments'

const EditComment = ({ id, content, createdAt, score, replies, onEdit }) => {
  const inputRef = useRef(null)
  const [editContent, setEditContent] = useState(content)
  const { getComments } = useComments()

  const editComment = (e) => {
    e.preventDefault()

    axios
      .post('https://localhost:7218/api/Comments/Edit', {
        id: id,
        content: editContent,
        createdAt: createdAt,
        score: score,
        replies: replies
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => response.data)
      .then(data => console.log(data.data))
      .catch(err => console.log(err))
      .finally(getComments())

    // Call the onEdit callback to inform the parent component about the edit
    onEdit()
  }

  return (
    <form className='flex flex-col w-full items-end gap-4' onSubmit={(e) => editComment(e)}>
      <textarea
        ref={inputRef}
        className='rounded-md border-[1px] outline-none resize-none border-light-gray focus:border-moderate-blue w-full px-4 py-2 text-dark-blue'
        name=''
        id=''
        cols='1'
        rows='5'
        placeholder='Edit your comment...'
        value={editContent}
        onChange={(e) => setEditContent(e.target.value)}>
      </textarea>
      <input
        onClick={(e) => editComment(e)}
        className='rounded-md bg-moderate-blue hover:bg-light-grayish-blue text-white px-6 py-3 w-fit h-fit font-medium cursor-pointer select-none'
        type="submit"
        value="UPDATE"
      />
    </form>
  )
}

export default EditComment
