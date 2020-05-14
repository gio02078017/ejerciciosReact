import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
    <h1>Hola</h1>
  )
  
  const Productos = () => (
    <h1>Productos</h1>
  )
  
  const Home = () => (
    <h1>Home</h1>
  )

//props en react
// exact solo para rutas exaxtas
// sensitive es similar a exact 
const RutasWithProps = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path='/' exact component={Home} />
        <Route path='/Hola' sensitive component={Hola} />
        <Route path='/productos' component={Productos} />
      </div>
    </BrowserRouter>
  )
}

export default RutasWithProps;