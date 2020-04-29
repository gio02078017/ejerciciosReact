import React,{ Component } from 'react';

class Login extends Component{

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                        type="email"
                        name="user"                        
                        className="form-control"
                        placeholder="Ingrese el correo electectronico"
                        onChange={this.handleInputs}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="password"
                        name="responsible"
                        className="form-control"
                        placeholder="Ingrese la contraseña"
                        onChange={this.handleInputs}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                </form>
            </div>
        )
    }

}

export default Login;