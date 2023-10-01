import React from 'react'

const AddComment = () => {
  return (
    <div className='bg-white w-full h-fit rounded-lg p-4 shadow-sm flex flex-col lg:flex-row items-end lg:items-start gap-4 relative'>
      <img className='h-10 absolute left-6 bottom-6 lg:top-6 lg:bottom-auto' src="../images/avatars/image-amyrobson.png" alt="" />
      <textarea className='rounded-md border-[1px] focus:border-inherit resize-none border-light-gray focus:border-moderate-blue w-full px-4 py-2 lg:ml-16 text-dark-blue' name="" id="" cols='1' rows='5' placeholder='Add a comment...'></textarea>
      <div className='rounded-md bg-moderate-blue hover:bg-light-grayish-blue text-white px-6 py-3 font-medium cursor-pointer select-none'>SEND</div>
    </div>
  )
}

export default AddComment