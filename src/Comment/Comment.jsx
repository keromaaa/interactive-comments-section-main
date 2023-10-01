import React from 'react'
import Upvotes from '../Upvotes/Upvotes'

const Comment = () => {
  return (
    <div>
      <div className='bg-white w-full h-fit rounded-lg p-4 shadow-sm flex flex-col lg:flex-row items-start gap-4 relative'>
        <div className='flex flex-col text-base gap-4'>
          <div className='flex gap-4 items-center h-fit'>
            <img className='h-10' src="../images/avatars/image-amyrobson.png" alt="" />
            <div className="flex items-center gap-3">
              <span className='font-medium text-dark-blue'>mr.ahmed</span>
              <div className='bg-moderate-blue text-white text-xs rounded-sm px-1 h-5 flex items-center'>you</div>
            </div>
            <span className='font-normal text-grayish-blue'>3 months ago</span>
          </div>
          <p className='font-normal text-grayish-blue'>Zmija prilazi mi kaže da sam gotov. Ona ne zna da ja ima protiv otrov. Otrov, otrov, otrov. Zmija prilazi mi kaže da sam gotov. Ona ne zna da ja imam protiv otrov. Otrov, otrov, otrov. .... kako kukovima radi. Otrovom .... volim da se sladim. HEJ! HEJ! HEJ! ........... mamasita.</p>
        </div>
        <Upvotes />
        <div className='absolute bottom-6 right-6 lg:top-6 lg:bottom-auto flex gap-4'>
          <div className="flex items-center gap-1 group cursor-pointer">
            <svg className='fill-soft-red group-hover:fill-pale-red' width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="inherit" /></svg>
            <div className='text-soft-red font-medium group-hover:text-pale-red select-none'>Delete</div>
          </div>
          <div className="flex items-center gap-1 group cursor-pointer">
            <svg className='fill-moderate-blue group-hover:fill-light-grayish-blue' width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="inherit" /></svg>
            <div className='text-moderate-blue font-medium group-hover:text-light-grayish-blue select-none'>Reply</div>
          </div>
        </div>
      </div >
      <div className='border-l border-light-gray'></div>
    </div>
  )
}

export default Comment