import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './componentes/Header'
import Footer from './componentes/Footer';


function App() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer/>
    </>
  )
}

export default App
