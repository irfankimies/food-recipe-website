import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/index.jsx'
import Details from './pages/details/index.jsx'
import Favorites from './pages/favorites/index.jsx'

function App() {

  return (
    <div className="min-h-screen bg-white text-gray-600 text-lg ">
      <Navbar/>
        <Routes>
          <Route
            path={'/'}
            element={<Home />}
          />
          <Route
            path={'/recipe-item/:id'}
            element={<Details />}
          />
          <Route
            path={'/favorites'}
            element={<Favorites />}
          />
        </Routes>
    </div>
  )
}

export default App
