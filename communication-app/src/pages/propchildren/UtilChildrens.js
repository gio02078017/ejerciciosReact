import React, { Component } from 'react'
import './global.css'


class Parent extends Component {
    render () {
        
        const {children: ch} = this.props

        /*const children = React.Children.map(ch, (child)=> {
            return child;
        })*/

        /*const children = React.Children.map(ch, (child, index)=> {
            if(index === 0){
               return child;
            }
        })*/
        
        /*const children = React.Children.map(ch, (child, index)=> {
            if(index !== 0){
               return child;
            }
        })*/

        //funciona pero si el array solo tiene un elemento falla
        /*const children = ch.map((child, index)=>{
            return <li key={index}>{child}</li>
        })*/

        const childrenArray = React.Children.toArray(ch)

        const children = childrenArray.map((child, index)=>{
            return <li key={index}>{child}</li>
        })



        return (
            <div className="box">    
                <div className="box blue">
                    {children}
                </div>       
            </div>
        )

    }
}

class ParentLength extends Component {
    render () {

        const {children} = this.props
        
        return (
            <div className="box">
    
                <div className="box red">
                    {children.length}
                </div>  

                <div className="box green">
                    {React.Children.count(children)}
                </div>  
    
            </div>
        )

    }
}

class ParentOnly extends Component {
    render () {

        const {children} = this.props
        
        return (
            <div className="box">
    
             <div className="box blue">
                {React.Children.only(children)}
             </div>  
    
            </div>
        )

    }
}



export default class UtilChildrens extends Component {

    render() {
        return (
            <div>
                <Parent>
                    <span>Manzanas</span>
                    <span>Peras</span>
                    <span>Mangos</span>
                </Parent>

                <ParentLength>
                    <span>Manzanas</span>
                    <span>Peras</span>
                    <span>Mangos</span>
                </ParentLength>
                <ParentOnly>
                    <span>Manzanas</span> 
                </ParentOnly>
            </div>
        )
    }

    /*render() {
        return (
            <div>
                <Parent> 
                    Hijo de texto
                    <div>Elementos</div>
                    {() => {}}
                    {444}
                    <br/>
                    {`otro texto`}
                    <br/>
                    {`La suma es ${5+5}`}
                </Parent>
            </div>
        )
    }*/
}