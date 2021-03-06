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
  

const RutasRender = () => {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path='/' exact component={Home} />
          <Route path='/hola' render={Hola} />
          <Route path='/productos'>
            {({ match }) => {
            //se utiliza la caracteristica match para validar si es la ruta adecuada
            if (!match) return (
              <div>
                *** Wops no coincide con /productos
              </div>
            )
            return (
              <Productos />
            )
          }  /*(props) =>{
              console.log(props)
              return (
                <Productos/>
              )
            }*/}
          </Route>
        </div>
      </BrowserRouter>
    )
  }

  export default RutasRender; 