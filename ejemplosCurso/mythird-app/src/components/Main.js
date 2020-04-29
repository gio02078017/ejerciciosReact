import React, { Component } from 'react';
import Navigation from './Navigation';
import TodoForm from './TodoForm';
import Card from './Card';
import logo from '../logo.svg';

import { todos } from '../todos.json';
//console.log(todos);

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            todos
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    removeTodo(index){
        console.log(index);
        if(window.confirm('Are you sure you want to delete it?')){
            this.setState({
                todos: this.state.todos.filter((e,i) => {
                    return i != index
                })
            })
        }
    }

    render(){
        console.log(this.state.todos)
        const todos = this.state.todos.map((todo,i) =>{
            return (
              <Card dataCard= {todo} onRemove= {this.removeTodo.bind(this, i)} index= {i}/> 
              /*<div className="col-md-4">
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
                    <div className='card-footer'>
                        <button className='btn btn-danger'
                        onClick={this.removeTodo.bind(this, i)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
              </div>*/
            )
        })

        //console.log("cantidad "+this.state.todos.lenght)
        return (
            <div className="App">            
            <Navigation title='Tasks' cantidad = {this.state.todos.length}/>
            
            <div className="container">
               <div className="row mt-4">
               <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div> 
               </div>
            </div>            
          </div>
        )
    }
}

export default Main;