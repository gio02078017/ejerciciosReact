import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import { Footer } from './components/Footer';



function App() {
  return (
    <div className="App">
       <Navigation/>
       <Header/>
       <Main/>
       <Footer/>
    </div>
  );
}

export default App;
