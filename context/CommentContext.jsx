import axios from "axios"
import React from "react"

import { useState, useEffect } from "react"

export const CommentContext = React.createContext(null)

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState(null)

  const getComments = () => {
    axios
      .get('https://localhost:7218/GetAll/', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => response.data)
      .then(data => setComments(data.data))
      .catch(err => console.log(err.message))
  }

  const getComment = (id) => {
    axios
      .get(`https://localhost:7218/api/Comments/Get?id=${id}`)
      .then(response => response.data)
      .then(data => setComment(data.value))
      .catch(err => console.log(err.message))

    return comment
  }

  useEffect(() => {
    getComments()
  }, [comments])

  return (
    <CommentContext.Provider value={{
      comment,
      comments,
      getComment,
      setComment,
      getComments
    }}>
      {children}
    </CommentContext.Provider>
  )
}

export default CommentProvider