import React, { Component } from 'react'
import axios from 'axios';

import {Tweet} from '../components/Tweet'
import MyModal from '../components/MyModal';
import Header from '../components/Header';

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
  
        if(this.props.history.action === "PUSH" || this.props.history.action === "POP"){
           this.setState({
               location: this.props.location.state.medidor
           })       
        }

        const medidor = this.props.location.state.medidor;


        if(medidor === "SignIn" ||  medidor === "SignUp"){
            if(localStorage.getItem("token")){
               this.setState({
                    token : localStorage.getItem("token")
                })
              }
        }        
      }
    
    componentDidMount(){
       this._callTweets()
    }

    _callTweets = async () => {
        const AuthStr = 'Bearer '.concat(this.state.token);
        const headers =  { headers: { Authorization: AuthStr } };
   
        try{
            const response = await axios.get('https://www.minitwitter.com:3001/apiv1/tweets/all', { headers: { Authorization: AuthStr } });
            const res = await response.data;
             this.setState({
                tweets: res
            })            

        }catch(error){
        console.log(error);
       }
    }

    confirmModalHandler = async () => {
        
        this.setState({
            isShowing: false
        });


        const AuthStr = 'Bearer '.concat(this.state.token);
        const headers =  { headers: { Authorization: AuthStr } };

        
        try{
            const response = await axios.delete(`https://www.minitwitter.com:3001/apiv1/tweets/${this.state.idDelete}`, { headers: { Authorization: AuthStr } });
            const res = await response.data;
            this._callTweets()

        }catch(error){
        console.log(error);
     
        }
    }

    render() {
        return (
            <div>
                <Header title="Tweets"/>
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
