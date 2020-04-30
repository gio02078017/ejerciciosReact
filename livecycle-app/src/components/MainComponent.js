import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import FetchExample from '../services/FetchExample'
import FetchExampleAsync from '../services/FetchExampleAsync'
import RenderArrow from '../pages/RenderArrow'
import RenderPage from '../pages/RenderPage'
import ConstructorPage from '../pages/ConstructorPage';
import WillMountPage from '../pages/WillMountPage';
import DidMountPage from '../pages/DidMountPage';
import EjemploDeCicloDeActualizacion from '../pages/EjemploDeCicloDeActualizacion';
import EjemploDeComponentWillUnmount from '../pages/EjemploDeComponentWillUnmount';
import EjemploDeComponenteDidCatch from '../pages/EjemploDeComponenteDidCatch';
import AxioExample from '../services/AxioExample';
import AxioExampleAsync from '../services/AxioExampleAsync';


const routing = (
    <Router>
        <Route exact path="/Constructor" component={ConstructorPage} />
        <Route exact path="/ComponenteWillMount" component={WillMountPage} />
        <Route exact path="/RenderArrow" component={RenderArrow} />
        <Route exact path="/RenderComponent" component={RenderPage} />
        <Route exact path="/ComponenteDidMount" component={DidMountPage} />
        <Route exact path="/FetchExample" component={FetchExample} />
        <Route exact path="/FetchExampleAsync" component={FetchExampleAsync} />
        <Route exact path="/AxioExample" component={AxioExample} />
        <Route exact path="/AxioExampleAsync" component={AxioExampleAsync} />
        <Route exact path="/CicloDeActualizacion" component={EjemploDeCicloDeActualizacion} />
        <Route exact path="/ComponenteWillUnmount" component={EjemploDeComponentWillUnmount} />
        <Route exact path="/ComponenteDidCatch" component={EjemploDeComponenteDidCatch} />
    </Router>
  )

class MainComponent extends Component{

    render(){
      return(
        <div className="container">
          {routing}
      </div>
      )
    }

}

export default MainComponent;