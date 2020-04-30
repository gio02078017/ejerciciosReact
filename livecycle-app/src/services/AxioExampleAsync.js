import React, { Component } from 'react';
import axios from 'axios';

class AxioExampleAsync extends Component {

    state = { bpi: {} }
    
    async componentDidMount() {
        try{
           const response = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
           const json = await response.data;
           const {bpi} = json;
           this.setState({ bpi});
           console.log(this.state.bpi);
        }catch(error){
            console.log("catch Error AxioExampleAsync");             
            console.log(error); 
        }
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
            <h4>Axio Async Example</h4>
            {this._renderCurrencies()}
        </div>
        )
    }
}

export default AxioExampleAsync;

