import { useAuthContext } from './useAuthContext'


export const useLogout = () => {
  const { setIsAuthenticated } = useAuthContext()
 
  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')
  

    setIsAuthenticated(false)
  }

  return { logout }
}