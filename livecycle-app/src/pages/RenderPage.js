import React, { Component } from 'react';

class RenderComponent extends Component{

  //render por fragmentos es necesario una key para que funcione correctamente
  render(){
    console.log("render");  
    return[
        <h1 key="A">Primer Elemento</h1>,
        <h2 key="B">Segundo Elemento</h2>,
        <h3 key="C" >Tercer Elemento</h3>,
        <h4 key="D">Cuarto Elemento</h4>,       
    ]
  }
}

export default RenderComponent;