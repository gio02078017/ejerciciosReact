import React, { Component } from 'react';

class FetchExample extends Component {

    state = { bpi: {} }
    
    componentDidMount() {

         fetch( `https://api.coindesk.com/v1/bpi/currentprice.json`)
         .then(res => res.json())
         .then(data => {
             console.log(data);
             const {bpi} = data;
             this.setState({bpi})
         })
         .catch(error =>{
             console.log("catch Error FetchExample");             
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
            <h4>Fetch Example</h4>
            {this._renderCurrencies()}
        </div>
        )
    }
}

export default FetchExample;

