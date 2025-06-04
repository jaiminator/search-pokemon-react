import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from './components/Templates/MainLayout'
import PokemonList from './components/Organisms/PokemonList/PokemonList'
import DragonBallList from './components/Organisms/DragonBallList/DragonBallList'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout leftContent={<DragonBallList />}
            rightContent={<PokemonList />}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
