import React, { Component } from 'react'
import axios from 'axios';

import {Tweet} from '../components/Tweet'
import MyModal from '../components/MyModal';

export default class Home extends Component {

    constructor(props){
        super(props);
        console.log("constructor");
        this.state = {
           token: "",
           location: "",
           tweets: [],
           isShowing: false,
           idDelete: ""
        }     
    }

    openModalHandler = (id) => {
        console.log("id tweet",id);
        
        this.setState({
            isShowing: true,
            idDelete: id
        });
    }
  
    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    componentWillMount(){
        //console.log("componentWillMount");
        //console.log(this.props.history.action);        
        if(this.props.history.action === "PUSH" || this.props.history.action === "POP"){
           //console.log(this.props.location);
           //console.log(this.props.location.state);
           this.setState({
               location: this.props.location.state.medidor
           })       
        }

        //console.log(this.state);        

        //console.log(this.state.location);

        const medidor = this.props.location.state.medidor;

        //console.log(medidor);

        if(medidor === "SignIn" ||  medidor === "SignUp"){
            //console.log("inside signup");
            if(localStorage.getItem("token")){
                //console.log('Data: ', localStorage.getItem("token"))
                this.setState({
                    token : localStorage.getItem("token")
                })
                //console.log(this.state.token)
            }
        }        
      }
    
    componentDidMount(){
       this._callTweets()
    }

    _callTweets = async () => {
        //console.log("componentDidMount");
        //console.log(this.state.token);
        const AuthStr = 'Bearer '.concat(this.state.token);
        const headers =  { headers: { Authorization: AuthStr } };
        //console.log(AuthStr);
        //console.log(headers);       
        
        try{
            const response = await axios.get('https://www.minitwitter.com:3001/apiv1/tweets/all', { headers: { Authorization: AuthStr } });
            const res = await response.data;
            //console.log(res);
            this.setState({
                tweets: res
            })
            
            //console.log("tweets", this.state.tweets);
            //this.props.history.push(`/home`);

        }catch(error){
        console.log(error);
        /*console.log(Object.keys(error), error.message);*/ 
        //console.error(e.response.status);
        
        }
    }

    confirmModalHandler = async () => {
        console.log("confirmModalHandler id", this.state.idDelete);
        
        this.setState({
            isShowing: false
        });

        console.log("confirmModalHandler");
        console.log(this.state.token);
        const AuthStr = 'Bearer '.concat(this.state.token);
        const headers =  { headers: { Authorization: AuthStr } };
        console.log(AuthStr);
        console.log(headers);       
        
        try{
            const response = await axios.delete(`https://www.minitwitter.com:3001/apiv1/tweets/${this.state.idDelete}`, { headers: { Authorization: AuthStr } });
            const res = await response.data;
            console.log(res);
            this._callTweets()
            //this.props.history.push(`/home`);

        }catch(error){
        console.log(error);
        /*console.log(Object.keys(error), error.message);*/ 
        //console.error(e.response.status);        
        }
    }

    render() {
        return (
            <div>
                <h1>Tweets</h1>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <MyModal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    confirmDelete={this.confirmModalHandler}
                    nameConfirm="Eliminar"
                    nameDeny="No"
                    >
                        Estas seguro de eliminar el tweet?
                </MyModal> 
                {<div className="containerTweets">
                {
                    this.state.tweets.map(tweet => {
                        return (
                            <Tweet
                            key={tweet.id} 
                            id = {tweet.id}
                            mensaje = {tweet.mensaje}
                            avatar = {tweet.user.photoUrl}
                            create= {tweet.user.created}
                            user = {tweet.user.username}
                            actionDelete={this.openModalHandler}  
                            />
                        )                      
                    })
                }
                </div>}
            </div>
        )
    }
}
