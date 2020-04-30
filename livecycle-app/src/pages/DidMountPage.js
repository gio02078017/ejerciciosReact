/*import React, { Component } from 'react';

class DidMountPage extends Component{
   render(){
       return(
           <div>
               hola
           </div>
       )
   }
}

export default DidMountPage;*/
import React, { Component } from 'react';

class DidMountPage extends Component{
    constructor(props){
        console.log("constructor");
        //debugger;    
        super(props);
        this.state = {
            scroll: 0
        }
    }

    componentWillMount(){
        console.log("componentWillMount");
        //debugger;
        this.setState({mensajeInicial: 'mensaje modificado por componentWillMount'});    
    }
    
    componentDidMount(){
        console.log('componentDidMount');
        //si cambio el state se ejecutara nuevamente el render
        //this.setState({otroState: ''})    
        //debugger;
        //aqui se inician los escuchadores
        document.addEventListener('scroll', () => {
            this.setState({scroll: window.screenY})
        })
    }
    
    render(){
        console.log("render");
        //debugger;
        return (
        <div>
            <h4>Ciclo de montaje: componentDidMount</h4>
            <p>Quis cupidatat consectetur laboris duis esse do eiusmod magna aliqua aute aute. Exercitation et enim commodo ipsum reprehenderit proident occaecat dolor irure cupidatat officia ullamco laborum. Incididunt elit exercitation anim ea. Dolore consectetur exercitation laboris occaecat pariatur duis eu. Laborum consequat consequat ea do deserunt elit voluptate. Nisi eiusmod mollit adipisicing do veniam eiusmod tempor in tempor ea minim dolore.</p>
            <p>Quis cupidatat consectetur laboris duis esse do eiusmod magna aliqua aute aute. Exercitation et enim commodo ipsum reprehenderit proident occaecat dolor irure cupidatat officia ullamco laborum. Incididunt elit exercitation anim ea. Dolore consectetur exercitation laboris occaecat pariatur duis eu. Laborum consequat consequat ea do deserunt elit voluptate. Nisi eiusmod mollit adipisicing do veniam eiusmod tempor in tempor ea minim dolore.</p>
            <p>Quis cupidatat consectetur laboris duis esse do eiusmod magna aliqua aute aute. Exercitation et enim commodo ipsum reprehenderit proident occaecat dolor irure cupidatat officia ullamco laborum. Incididunt elit exercitation anim ea. Dolore consectetur exercitation laboris occaecat pariatur duis eu. Laborum consequat consequat ea do deserunt elit voluptate. Nisi eiusmod mollit adipisicing do veniam eiusmod tempor in tempor ea minim dolore.</p>
            <p>Quis cupidatat consectetur laboris duis esse do eiusmod magna aliqua aute aute. Exercitation et enim commodo ipsum reprehenderit proident occaecat dolor irure cupidatat officia ullamco laborum. Incididunt elit exercitation anim ea. Dolore consectetur exercitation laboris occaecat pariatur duis eu. Laborum consequat consequat ea do deserunt elit voluptate. Nisi eiusmod mollit adipisicing do veniam eiusmod tempor in tempor ea minim dolore.</p>
            <p>Quis cupidatat consectetur laboris duis esse do eiusmod magna aliqua aute aute. Exercitation et enim commodo ipsum reprehenderit proident occaecat dolor irure cupidatat officia ullamco laborum. Incididunt elit exercitation anim ea. Dolore consectetur exercitation laboris occaecat pariatur duis eu. Laborum consequat consequat ea do deserunt elit voluptate. Nisi eiusmod mollit adipisicing do veniam eiusmod tempor in tempor ea minim dolore.</p>
            <p>Quis cupidatat consectetur laboris duis esse do eiusmod magna aliqua aute aute. Exercitation et enim commodo ipsum reprehenderit proident occaecat dolor irure cupidatat officia ullamco laborum. Incididunt elit exercitation anim ea. Dolore consectetur exercitation laboris occaecat pariatur duis eu. Laborum consequat consequat ea do deserunt elit voluptate. Nisi eiusmod mollit adipisicing do veniam eiusmod tempor in tempor ea minim dolore.</p>
            <p>Quis cupidatat consectetur laboris duis esse do eiusmod magna aliqua aute aute. Exercitation et enim commodo ipsum reprehenderit proident occaecat dolor irure cupidatat officia ullamco laborum. Incididunt elit exercitation anim ea. Dolore consectetur exercitation laboris occaecat pariatur duis eu. Laborum consequat consequat ea do deserunt elit voluptate. Nisi eiusmod mollit adipisicing do veniam eiusmod tempor in tempor ea minim dolore.</p>
            <p>Quis cupidatat consectetur laboris duis esse do eiusmod magna aliqua aute aute. Exercitation et enim commodo ipsum reprehenderit proident occaecat dolor irure cupidatat officia ullamco laborum. Incididunt elit exercitation anim ea. Dolore consectetur exercitation laboris occaecat pariatur duis eu. Laborum consequat consequat ea do deserunt elit voluptate. Nisi eiusmod mollit adipisicing do veniam eiusmod tempor in tempor ea minim dolore.</p>
        </div> 
        )
    }
}
export default DidMountPage;