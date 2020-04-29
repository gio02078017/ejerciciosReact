import React, {Component} from 'react';
import './App.css';
import Article from './components/Article';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Article
            title = 'Articulo sobre la prop children y las prop-type'
            author = 'gospinal'
            fecha = {new Date().toLocaleDateString()}

            authorization = {1}
            >
            <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.prop.children
            <strong> Y mantiene las etiquetas y componetes que hayaáis añadido dentro</strong></p>
        </Article>
      </div>
    )  
  }
}

export default App;
