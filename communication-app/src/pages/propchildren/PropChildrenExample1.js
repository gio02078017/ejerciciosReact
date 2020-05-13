import React, { Component } from 'react'
import './global.css'

const Parent = ({children}) => {
    return (
        <div className="box">

         <div className="box blue">
             {children}
         </div>

         <div className="box red">
             {children}
         </div>

        </div>
    )
}

export default class PropChildrenExample1 extends Component {
    render() {
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
    }
}
