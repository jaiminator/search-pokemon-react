import { BrowserRouter, Route, Routes } from 'react-router'
import PokemonList from './components/Organisms/PokemonList/PokemonList'
import DragonBallList from './components/Organisms/DragonBallList/DragonBallList'
import { MainLayout } from './components/Templates/MainLayout'
import { ThemeContext } from './contexts/ThemeContext'
import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState("pink");

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout leftContent={<DragonBallList />}
              rightContent={<PokemonList />}/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  )
}

export default App
