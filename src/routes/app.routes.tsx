import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import PokemonDetail from '../pages/PokemonDetail'
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<PokemonDetail />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
