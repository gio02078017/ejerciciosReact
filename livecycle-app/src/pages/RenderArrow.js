import React, { Component } from 'react';

class RenderArrow extends Component{

    
  constructor(props){
    console.log("constructor");    
    super(props);
    this.state = {
      mensajeInicial: 'mensaje inicial'
      //mensajeInicial: 'mensaje otro mensaje'
    }
  }

  render(){
    return this.state.mensajeInicial === 'mensaje inicial' ? 'sip!' : null;
  }
}

export default RenderArrow;