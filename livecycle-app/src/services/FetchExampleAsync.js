import React, { Component } from 'react';

class FetchExampleAsync extends Component {

    state = { bpi: {} }
    
    async componentDidMount() {

        try {
            const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
            const json = await response.json();
            const {bpi} = json;
            this.setState({ bpi});
            console.log(this.state.bpi);            
        } catch (error) {
            console.log("catch error FetchExampleAsync")  
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
            <h4>Fetch Async Example</h4>
            {this._renderCurrencies()}
        </div>
        )
    }
}

export default FetchExampleAsync;