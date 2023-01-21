import { useState } from 'react'
import { AppContext } from './AppContext'

export default function AppProvider({ children }) {
  const [name, setName] = useState('Front Beginners')

  const number = 10

  // useReduce()

  return (
    <AppContext.Provider value={{ name, setName, number }}>
      {children}
    </AppContext.Provider>
  )
}
