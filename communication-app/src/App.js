import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';

import {NotFound} from './pages/NotFound';

import FatherToSon from './pages/others/FatherToSon'
import SonToFather from './pages/others/SonToFather'
import Brothers from './pages/others/Brothers'
import ObserverPattern from './pages/observers/ObserverPattern'
import GlobalVar from './pages/others/GlobalVar'

import APIContext from './pages/APIContext'

import RenderPropSonToFather from './pages/renderprop/RenderPropSonToFather'
import RenderProp from './pages/renderprop/RenderProp'

import HocSonToFather from './pages/hoc/HocSonToFather'
import HocConfig from './pages/hoc/HocConfig'
import HocWithSizes from './pages/hoc/HocWithSizes'

import PropChildrenExample1 from './pages/propchildren/PropChildrenExample1'
import UtilChildrens from './pages/propchildren/UtilChildrens'
import ImplicitComposition from './pages/propchildren/ImplicitComposition'

import LazyAndSuspence from './pages/lazyandsuspence/LazyAndSuspence'

import ExampleRef from './pages/ref/ExampleRef'
import RefsWithThirdLibraries from './pages/ref/RefsWithThirdLibraries'
import ForwardRef from './pages/ref/ForwardRef'

const routing = (
  <Switch>
      <Route exact path="/" component={FatherToSon} />
      <Route exact path="/SonToFather" component={SonToFather} />
      <Route exact path="/Brothers" component={Brothers} />
      <Route exact path="/ObserverPattern" component={ObserverPattern} />
      <Route exact path="/GlobalVar" component={GlobalVar} />
      <Route exact path="/APIContext" component={APIContext} />
      <Route exact path="/RenderPropSonToFather" component={RenderPropSonToFather} />
      <Route exact path="/RenderProp" component={RenderProp} />
      <Route exact path="/HocSonToFather" component={HocSonToFather} />
      <Route exact path="/HocConfig" component={HocConfig} />
      <Route exact path="/HocWithSizes" component={HocWithSizes} />
      <Route exact path="/PropChildrenExample1" component={PropChildrenExample1} />
      <Route exact path="/UtilChildrens" component={UtilChildrens} />
      <Route exact path="/ImplicitComposition" component={ImplicitComposition} />
      <Route exact path="/LazyAndSuspence" component={LazyAndSuspence} />
      <Route exact path="/ExampleRef" component={ExampleRef} />
      <Route exact path="/RefsWithThirdLibraries" component={RefsWithThirdLibraries} />
      <Route exact path="/ForwardRef" component={ForwardRef} />
      <Route component={NotFound}/>
  </Switch>
)

function App() {
  return (
    <div className="App">
      <Header title="Communication"/>
      {routing}     
    </div>
  );
}

export default App;

