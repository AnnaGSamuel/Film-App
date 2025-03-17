import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddMovies from './components/AddMovies'
import ListMovies from './components/ListMovies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
        <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/add' element={<AddMovies/>}></Route>
        <Route path='/list' element={<ListMovies/>}></Route>
        </Routes>
      
    </>
  )
}

export default App
