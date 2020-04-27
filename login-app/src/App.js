import React from 'react';
import { Title } from './components/title';
import LoginForm  from './components/loginForm';
import './App.css';

function App() {
    return ( 
        <div className = "App">
           <Title> Ingrese el usuario y la contraseña </Title>
           <LoginForm />
        </div>
    );
}

export default App;