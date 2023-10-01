import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import CommentProvider from '../../context/CommentContext'

const Main = () => {
	return (
		<div className='font-rubik bg-very-light-gray h-screen flex justify-center'>
			<CommentProvider>
				<CommentSection />

			</CommentProvider>
		</div>
	)
}

export default Main