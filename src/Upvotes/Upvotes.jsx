import React, { useState } from 'react'
import useComments from '../../hooks/useComments'

const Upvotes = ({ upvotes }) => {
  const [upvoted, setUpvoted] = useState(0)
  const { getComment, setComment } = useComments()

  const handleUpvote = () => {
    setUpvoted(prevUpvoted => prevUpvoted + 1)
  }

  const handleDownvote = () => {
    setUpvoted(prevUpvoted => prevUpvoted - 1)
  }

  return (
    <div className='bg-very-light-gray rounded-[10px] h-fit w-fit p-2 py-1.5 flex lg:px-3 lg:flex-col justify-center items-center gap-4 lg:gap-1 lg:order-first'>
      <p
        className={`${upvoted === 1 ? 'text-moderate-blue' : 'text-light-grayish-blue'} cursor-pointer font-bold  hover:text-moderate-blue text-center select-none`}
        onClick={upvoted < 1 && handleUpvote}>+</p>
      <p className='text-moderate-blue font-medium cursor-default text-center select-none'>{upvotes + upvoted}</p>
      <p
        className={`${upvoted === -1 ? 'text-moderate-blue' : 'text-light-grayish-blue'} cursor-pointer font-bold  hover:text-moderate-blue text-center select-none`}
        onClick={upvoted > -1 && handleDownvote}>-</p>
    </div>
  )
}

export default Upvotes