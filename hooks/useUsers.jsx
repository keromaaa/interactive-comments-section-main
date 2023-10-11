import React, { useContext } from 'react'

import { UserContext } from '../context/UserContext'

const useUsers = () => useContext(UserContext)

export default useUsers