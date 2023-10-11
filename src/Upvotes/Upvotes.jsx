import React, { useState } from 'react'
import axios from 'axios'

const Upvotes = ({ comment }) => {

  const handleUpvote = () => {
    if (comment.upvoted < 1) {
      updateScore(1)
    }
  }

  const handleDownvote = () => {
    if (comment.upvoted > -1) {
      updateScore(-1)
    }
  }

  const updateScore = (rating) => {
    console.log(`old score: ${comment.score}`)

    console.log(`new score: ${comment.score + rating}`)

    const updatedComment = {
      ...comment,
      score: comment.score + rating,
      upvoted: comment.upvoted + rating
    }

    axios
      .post('https://localhost:7218/api/Comments/Edit', updatedComment, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => response.data)
      .then(data => console.log(data.data))
      .catch(err => console.log(err))
  }

  return (
    <div className='bg-very-light-gray rounded-[10px] h-fit w-[90px] lg:w-10 p-2 py-1.5 flex justify-between lg:px-3 lg:flex-col items-center gap-4 lg:gap-1 lg:order-first'>
      <p
        className={`${comment.upvoted === -1 ? 'text-moderate-blue' : 'text-light-grayish-blue'} cursor-pointer font-bold  hover:text-moderate-blue text-center select-none lg:order-last`}
        onClick={handleDownvote}>-</p>
      <p className='text-moderate-blue font-medium cursor-default text-center select-none'>{comment.score}</p>
      <p
        className={`${comment.upvoted === 1 ? 'text-moderate-blue' : 'text-light-grayish-blue'} cursor-pointer font-bold  hover:text-moderate-blue text-center select-none lg:order-first`}
        onClick={handleUpvote}>+</p>
    </div>
  )
}

export default Upvotes