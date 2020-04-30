import React, { Component } from 'react';
import axios from 'axios';

class AxioExample extends Component {

    state = { bpi: {} }
    
    componentDidMount() {
        axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
         .then(res => {
           console.log(res);
           console.log(res.data);
           const {bpi} = res.data;
           this.setState({bpi})
         }).catch(error =>{
            console.log("catch Error AxioExample");             
            console.log(error);            
        })
    }

    _renderCurrencies(){
        //console.log(this.state.bpi);
        const {bpi} = this.state;
        const currrencies = Object.keys(bpi)
        return currrencies.map(currency => (
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span>{currency}</span>
            </div>
        ))      
    }

    render(){
        return(
        <div>
            <h4>Axio Example</h4>
            {this._renderCurrencies()}
        </div>
        )
    }
}

export default AxioExample;

