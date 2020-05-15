import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './components/Counter'
import Info from './components/Info'
import Fruits from './components/Fruits';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          {/*<Info />
          <Counter />*/}
          {/*<Fruits/>*/}
          <Todos/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
