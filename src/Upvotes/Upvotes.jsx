import React, { useState } from 'react'
import useComments from '../../hooks/useComments'

const Upvotes = ({ comment }) => {
  const [upvoted, setUpvoted] = useState(0)

  const handleUpvote = () => {
    setUpvoted(prevUpvoted => prevUpvoted + 1)
  }

  const handleDownvote = () => {
    setUpvoted(prevUpvoted => prevUpvoted - 1)
  }

  return (
    <div className='bg-very-light-gray rounded-[10px] h-fit w-[90px] lg:w-10 p-2 py-1.5 flex justify-between lg:px-3 lg:flex-col items-center gap-4 lg:gap-1 lg:order-first'>
      <p
        className={`${upvoted === -1 ? 'text-moderate-blue' : 'text-light-grayish-blue'} cursor-pointer font-bold  hover:text-moderate-blue text-center select-none lg:order-last`}
        onClick={upvoted > -1 && handleDownvote}>-</p>
      <p className='text-moderate-blue font-medium cursor-default text-center select-none'>{comment.score}</p>
      <p
        className={`${upvoted === 1 ? 'text-moderate-blue' : 'text-light-grayish-blue'} cursor-pointer font-bold  hover:text-moderate-blue text-center select-none lg:order-first`}
        onClick={upvoted < 1 && handleUpvote}>+</p>
    </div>
  )
}

export default Upvotes