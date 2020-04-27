import React from 'react';
import { Title } from './components/title';
import LoginForm from './components/loginForm';
import './App.css';

function App() {
    return ( 
        <div className = "App" >
            <Title > Ingrese el usuario y la contraseña </Title> 
            <LoginForm />
            <h3 > hola mundo </h3> 
            <h4>hola 3</h4>
        </div>
    );
}

export default App;