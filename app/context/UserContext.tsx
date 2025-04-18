'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type UserContextType = {
  username: string | null
  login: (name: string) => void
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => {
    const storedName = localStorage.getItem('mokuba_user')
    if (storedName) setUsername(storedName)
  }, [])

  const login = (name: string) => {
    setUsername(name)
    localStorage.setItem('mokuba_user', name)
  }

  const logout = () => {
    setUsername(null)
    localStorage.removeItem('mokuba_user')
  }

  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser precisa estar dentro do UserProvider')
  return context
}