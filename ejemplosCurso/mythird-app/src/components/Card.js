import React, { Component } from 'react';

class Card extends Component{

    constructor(){
     super();
     this.state = {
     }
     this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e){
      console.log("remove $i");
      this.props.onRemove(this.props.index);
      
    }

    render(){
        return (
            <div className="col-md-4">
            <div className="card mt-4">
                <div className="card-header">
                   <h3>{this.props.dataCard.title}</h3>
                   <span className="badge badge-pill badge-danger ml-2">
                       {this.props.dataCard.priority}
                   </span>
                </div>
                <div className="card-body">
                   <p>{this.props.dataCard.description}</p>
                   <p>{this.props.dataCard.responsible}</p>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-danger'
                    onClick={this.handleRemove}
                    >
                        Delete
                    </button>
                </div>
            </div>
          </div>
        )
    }
}

export default Card;