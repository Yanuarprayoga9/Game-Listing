import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className={`${theme} ${theme=="dark" ?'bg-[#121212]':null}`}>
    <Header/>
     <Home/>
    </div>
  )
}

export default App
