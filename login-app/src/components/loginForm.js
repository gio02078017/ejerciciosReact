import React, { Component } from 'react';


export default class LoginForm extends Component{
	
  constructor(props){
	super(props);
	this.state = {
		inputUser : 'gio',
		inputPassword : 'hhh'
	}
  }
  
  handleSubmit = (e) => {
	 console.log("handleSubmit")  
	 console.log(this.state) 
  }
  
 
  handleChange = (e) => {
	 
  }
  
  render (){
	return (
	  <form onSubmit={this.handleSubmit}> 
        <p>
			<label htmlFor="user">Nombre:</label><br/>
			<input 
				id='user' 
				name= 'user'
				onChange = {(e) => this.setState({inputName: e.target.value})}
				placeholder='Introduce el nombre' 
				value={this.state.inputUser}/>
		</p>
		<p>
			<label htmlFor="password">Contraseña:</label><br/>
			<input 
				id='password' 
				name= 'paswword' 
				onChange = {(e) => this.setState({inputPassword: e.target.value})}
				placeholder='Introduce la contraseña' 
				value={this.state.inputPassword}/>
		</p>
		<button>Enviar</button>
	  </form>
	)  
  }
}