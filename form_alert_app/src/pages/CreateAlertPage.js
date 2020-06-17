import React, { Component } from 'react'
import {MyForm} from '../componets/MyForm'
import { Typography } from "@material-ui/core";

export default class CreateAlertPage extends Component {
    render() {
        return (
            <div>
                <Typography>hola create new alerta</Typography>
                <MyForm/>
            </div>
        )
    }
}
