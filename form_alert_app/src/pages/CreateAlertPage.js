import React, { Component } from 'react'
import {MyForm2} from '../componets/MyForm2'
import { Typography } from "@material-ui/core";

export default class CreateAlertPage extends Component {
    render() {
        return (
            <div>
                <Typography>hola create new alerta</Typography>
                <MyForm2/>
            </div>
        )
    }
}
