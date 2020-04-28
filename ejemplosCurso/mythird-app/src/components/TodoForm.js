import React, { Component } from 'react';

class TodoForm extends Component{

    constructor(){
        super();
        this.state = {
            title: '',
            resposible: '',
            description: '',
            proority:'low'
        }
        this.handleInputs = this.handleInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputs(e){
       console.log('writing...');
       console.log(e.target.value, e.target.name);
       const {value, name } = e.target;
       this.setState({
          [name]: value
       })
       console.log(this.state);      
    }

    handleSubmit(e){
      e.preventDefault();
      alert('sending the data...');
      this.props.onAddTodo(this.state);
      this.setState({
        title: '',
        responsible: '',
        description: '',
        priority: 'low'
      });
    }

    render(){
        return(
          <div className="card">
              <form className="card-body" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <input
                        type="text"
                        name="title"                        
                        className="form-control"
                        placeholder="Title"
                        onChange={this.handleInputs}
                      />
                  </div>
                  <div className="form-group">
                      <input
                        type="text"
                        name="responsible"
                        className="form-control"
                        placeholder="Responsible"
                        onChange={this.handleInputs}
                      />
                  </div>
                  <div className="form-group">
                      <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        onChange={this.handleInputs}
                      />
                  </div>
                  <div className="form-group">
                      <select
                        name='priority'
                        className='form-control'
                        onChange={this.handleInputs}
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                      </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
              </form>
          </div>
        )
    }
}

export default TodoForm;