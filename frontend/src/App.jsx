import React from 'react'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Menu from './components/Menu'

const App = () => {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastrar-fornecedor" element={<FornecedorForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App