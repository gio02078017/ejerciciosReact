import React, {useState} from 'react';

export const Tweet = (props) => {

    const avatar = props.avatar != "" ? "https://www.minitwitter.com/apiv1/uploads/photos/"+props.avatar: "";

    const _handleDelete = (e) => {
        e.preventDefault();
        props.actionDelete(props.id)
    }

    return(
        <div className="containerTweet">   
            <div className="card mb-3">
                <div className="deleteTweet">
                    <a href="#" onClick={_handleDelete}>
                        <i className="fas fa-trash-alt"></i>
                    </a>
                </div>  
                <div className="row no-gutters">
                    <div className="col-md-4 divImage">
                        <img src={avatar} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">@{props.user}</h5>
                            <p className="card-text">{props.mensaje}</p>
                            <p className="card-text"><small className="text-muted">{props.create}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}