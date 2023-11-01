import { useState } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThemeContext } from './Context/ThemeContext'
function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme,setTheme }}>
      <div className={`${theme} ${theme == "dark" ? 'bg-[#121212]' : null}`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
