import AppProvider from './context/AppProvider'
import ChildrenOne from './components/ChildrenOne'
import ChildrenTwo from './components/ChildrenTwo'
import './App.css'

function App() {
  return (
    <AppProvider>
      <ChildrenOne />
      <ChildrenTwo />
    </AppProvider>
  )
}

export default App
