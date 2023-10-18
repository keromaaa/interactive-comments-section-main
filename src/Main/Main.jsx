import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import CommentProvider from '../../context/CommentContext'
import UserProvider from '../../context/UserContext'

const Main = () => {
	return (
		<div className='font-rubik bg-very-light-gray h-screen flex justify-center  overflow-scroll'>
			<UserProvider>
				<CommentProvider>
					<CommentSection />
				</CommentProvider>
			</UserProvider>
		</div>
	)
}

export default Main