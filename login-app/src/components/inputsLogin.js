import React, { Component } from 'react';


export class LoginForm extends Components{
  state = {
	  user: '';
	  password: '';
  }
  
  render (){
	return (
	  <form> 
	    <ul>
		  <li>
			<label for="name">Usuario:</label><br/>
			<input type="text" className="user">
		  </li>
		  <li>
			<label for="mail">contraseña:</label><br/>
			<input type="password" className="password">
		  </li>
		  <li>
			<button type="submit">enviar</button>
		  </li>
		 </ul>
	  </form>
	);  
  }
}