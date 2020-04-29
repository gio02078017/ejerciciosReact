import React, { Component } from 'react';

class Welcome extends Component {

    render(){
        return(
        <div className="containerWelcome">
            <section className="section">
                <div className="container">
                    <h1 className="title">Bienvenido</h1>
                    <h2 className="subtitle">
                        Es usted bienvenido a la mejor <strong>pagina</strong>, creada en react js
                    </h2>
                </div>
            </section>
        </div>
        )
    }

}

export default Welcome;