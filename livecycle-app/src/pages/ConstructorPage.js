import React, {Component } from 'react';

class ConstructorPage extends Component {

  constructor(props){
    console.log("constructor");    
    super(props);//este llama al constructor de Component
    //inicializamos el state de nuestro componente
    this.state = {
      mensajeInicial: 'mensaje inicial'
    }
    //bindeamos el contexto al método, se puede evitar utilizando las arrow function
    //this.handleClick = this.handleClick.bind(this);
  }

  //sin arrow function
  /*handleClick(){
    this.setState({mensajeInicial: 'mensaje cambiado'});
  }*/

  //con arrow function
  handleClick = () =>{
    this.setState({mensajeInicial: 'mensaje cambiado'});
  }


  render(){
    console.log("render");  
    return (
      <div className="App">
        <h4>Ciclo de montaje: constructor</h4>
         {this.state.mensajeInicial}
         <br/><br/>
         <button onClick= {this.handleClick}>
           Cambiar Mensaje
         </button>
      </div> 
    )
  }
}

export default ConstructorPage;