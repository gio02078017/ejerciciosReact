import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Modal from './MyModal'


class App extends Component {

  constructor() {
      super();

      this.state = {
          isShowing: false
      }
  }

  openModalHandler = () => {
      this.setState({
          isShowing: true
      });
  }

  closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
  }

  render () {
      return (
          <div>
              { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

              <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

              <Modal
                  className="modal"
                  show={this.state.isShowing}
                  close={this.closeModalHandler}
                  nameConfirm="Eliminar"
                  nameDeny="No">
                      Estas seguro de eliminar el tweet?
              </Modal>
          </div>
      );
  }
}

export default App;
