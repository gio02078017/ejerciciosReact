import React, { Component } from 'react'
import axios from 'axios';
import { ImagenLogin } from '../components/ImageLogin'
import { ImageTopLogin } from '../components/ImageTopLogin'


export default class SignIn extends Component {

    state = {
        inputEmail: "",
        inputPassword: "",
        information: {
            email: "",
            password: ""
        },
        location: "SignIn",
        responseService: {
            token: "",
            username:"",
            email:"",
            photoUrl:"",
            created:"",
            active: false
        }
    }

    _goHome = () => {
        
        this.props.history.push({
            pathname: '/home',
            from: this.props.location.pathname,
            state: {
              medidor: this.state.location
            }
          });
    } 


    _handleChange = (e) => {     
        const {value, name } = e.target;   
        this.setState({
            [name] : value
        })        
    }

    _handleSubmit = async (e) => {
        e.preventDefault();
        this.state.information.email = this.state.inputEmail
        this.state.information.password = this.state.inputPassword
        
        try{
            const response = await axios.post('https://www.minitwitter.com:3001/apiv1/auth/login', this.state.information);
            const res = await response.data;
            localStorage.setItem("token", res.token)
            this.setState({
               responseService: res
            })
            
            this._goHome()
        }catch(error){
           console.log(error);
           
        }         
        
    }



    render() {
        return (
           <div className="principalContainer">
              <ImageTopLogin/>
              <div className="card sizeTable">
                <div className="card-body">
                    <div className="row">
                        <ImagenLogin/>
                        <div className="col-md-6">
                        <form onSubmit= {this._handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Correo Electronico</label>
                                <input
                                    onChange = {this._handleChange} 
                                    type="email" 
                                    name="inputEmail" 
                                    className="form-control" 
                                    id="inputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Escriba su correo electronico" 
                                    required/>                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Contraseña</label>
                                <input
                                    onChange = {this._handleChange} 
                                    type="password" 
                                    name="inputPassword" 
                                    className="form-control" 
                                    id="inputPassword" 
                                    placeholder="Escriba su contraseña" 
                                    required/>
                            </div>
                             <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
                            </form>                
                        </div>
                    </div>
                    <div className="mt-3">
                      <a  href="/signUp">Si aún no tienes cuenta, registrate aquí</a>
                    </div>
                </div>
              </div>
           </div>
        )
    }
}
