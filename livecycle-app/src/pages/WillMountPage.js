import React, {Component } from 'react';

class WillMountPage extends Component{

    constructor(props){
        console.log("constructor");    
        super(props);
        this.state = {
          mensajeInicial: 'mensaje inicial'
        }
      }
    
      componentWillMount(){
        console.log("componentWillMount");
        this.setState({mensajeInicial: 'mensaje modificado por componentWillMount'});
        
      }

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

export default WillMountPage;