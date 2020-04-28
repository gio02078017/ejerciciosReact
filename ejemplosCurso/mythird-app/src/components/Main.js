import React, { Component } from 'react';
import Navigation from './Navigation';
import logo from '../logo.svg';

import { todos } from '../todos.json';
//console.log(todos);

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            todos
        }
    }

    render(){
        console.log(this.state.todos)
        const todos = this.state.todos.map((todo,i) =>{
            return (
              <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">
                       <h3>{todo.title}</h3>
                       <span className="badge badge-pill badge-danger ml-2">
                           {todo.priority}
                       </span>
                    </div>
                    <div className="card-body">
                       <p>{todo.description}</p>
                       <p>{todo.responsible}</p>
                    </div>
                </div>
              </div>
            )
        })

        //console.log("cantidad "+this.state.todos.lenght)
        return (
            <div className="App">            
            <Navigation title='Tasks' cantidad = {this.state.todos.length}/>
            <div className="container">
               <div className="row mt-4">
                 {todos}  
               </div>
            </div>            
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        )
    }
}

export default Main;