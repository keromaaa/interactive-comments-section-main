import axios from "axios"
import React from "react"

import { useState, useEffect } from "react"

export const UserContext = React.createContext(null)

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)

  const getUsers = () => {
    axios
      .get('https://localhost:7218/api/Users/GetAll', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => response.data)
      .then(data => setUsers(data.data))
      .catch(err => console.log(err.message))
  }

  const getUser = (id) => {
    axios
      .get(`https://localhost:7218/api/Users/Get?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => response.data)
      .then(data => setUser(data.value))
      .catch(err => console.log(err.message))

    return user
  }

  return (
    <UserContext.Provider value={{
      user,
      users,
      setUser,
      getUser,
      setUsers,
      getUsers
    }}>
      {children}
    </UserContext.Provider>
  )
}
