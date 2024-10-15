import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './componentes/Header'
import Footer from './componentes/Footer';


function App() {
  return (
    <>
      <Header />

      <div className="mt-20">
        <Outlet />
      </div>

      <Footer/>
    </>
  )
}

export default App
