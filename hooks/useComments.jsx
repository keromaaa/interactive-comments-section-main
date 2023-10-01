import React, { useContext } from 'react'

import { CommentContext } from '../context/CommentContext'

const useComments = () => useContext(CommentContext)

export default useComments
