import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import CommentProvider from '../../context/CommentContext'

const Main = () => {
	return (
		<div className='font-rubik bg-very-light-gray h-screen flex justify-center  overflow-scroll'>
			<CommentProvider>
				<CommentSection />
			</CommentProvider>
		</div>
	)
}

export default Main