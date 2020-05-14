import React from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import './Rutas.css';

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = (props) => (
  <div>
    <h1>Productos</h1>
    <div style={navStyles}>
        <Link to='/productos/gamers'>Gamers</Link>
        <Link to='/productos/hogar'>Hogar</Link>
    </div>
  </div>
)

const Home = (props) => (
  <h1>Home</h1>
)

const ProductosCategoria = ({ match }) => {
  console.log(match)

  return (
    <div>
      <h1>Categoria: { match.params.categoria }</h1>
    </div>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const NavActive = {
  color: 'orangered'
}

const Navegation = () => (
  <nav style={navStyles}>
    <NavLink
      to='/'
      exact
      activeStyle={NavActive}
    >
      Home
    </NavLink>
    <NavLink
      to='/hola'
      activeClassName='navActive'
    >
      Hola
    </NavLink>
    <NavLink
      to='/productos'
      activeStyle={NavActive}
    >
      Productos
    </NavLink>
  </nav>
)

const RutasParams = () => {
  return (
    <div className="container">
        <BrowserRouter>
            <Navegation />
            <Route path='/' exact render={Home} />
            <Route path='/hola' render={Hola} />
            <Route path='/productos' exact render={Productos} />
            <Route path='/productos/:categoria/:id?' render={ProductosCategoria} />
        </BrowserRouter>
    </div>
  )
}

export default RutasParams