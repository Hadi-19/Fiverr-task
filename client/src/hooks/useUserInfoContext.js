import React, { useContext } from 'react'
import { UserInfoContext } from '../context/UserInfoContext'

export const useUserInfoContext = () => {
    const context = useContext(UserInfoContext)
    

    if(!context) {
      throw Error('useAuthContext must be used inside an AuthContextProvider')
    }
  
    return context
  
}
