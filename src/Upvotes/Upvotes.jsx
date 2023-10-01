import React, { useState } from 'react'

const Upvotes = ({ upvotes }) => {

  return (
    <div className='bg-very-light-gray rounded-[10px] h-fit w-fit p-2 py-1.5 flex lg:px-3 lg:flex-col justify-center items-center gap-4 lg:gap-1 lg:order-first'>
      <p className='text-light-grayish-blue cursor-pointer font-bold  hover:text-moderate-blue text-center select-none'>+</p>
      <p className='text-moderate-blue font-medium cursor-default text-center select-none'>{upvotes}</p>
      <p className='text-light-grayish-blue cursor-pointer font-bold  hover:text-moderate-blue text-center select-none'>-</p>
    </div>
  )
}

export default Upvotes