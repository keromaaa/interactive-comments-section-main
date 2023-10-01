import axios from "axios"
import React from "react"

import { useState, useEffect } from "react"

export const UserContext = React.createContext(null)

const UserProvider = () => {
  const [user, setUser] = useState([])
}
