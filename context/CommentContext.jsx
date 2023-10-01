import axios from "axios"
import React from "react"

import { useState, useEffect } from "react"

export const CommentContext = React.createContext(null)

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState(null)

  const getComments = () => {
    axios
      .get('https://localhost:7218/GetAll')
      .then(response => response.data)
      .then(data => setComments(data.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (comments.length === 0)
      getComments()
  }, [comments])

  return (
    <CommentContext.Provider value={{
      comment,
      comments,
      setComment,
      getComments
    }}>
      {children}
    </CommentContext.Provider>
  )
}

export default CommentProvider