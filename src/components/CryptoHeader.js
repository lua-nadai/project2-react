import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

import ApiCrypto from '../api/api.js'

class CryptoHeader extends Component {

    state = {
        crypto: {} 
    }
 


    componentDidMount() {
        const cryptoId = this.props.match.params.id;
        ApiCrypto.listCryptoHeader(cryptoId).then((result) => {
            this.setState({
                crypto: result.data[0]
            })
        })
    }

    componentDidUpdate = async (prevProps)=>{

        if (this.props.match.params.id !== prevProps.match.params.id) {
            
            const cryptoId = this.props.match.params.id;
            const result = await ApiCrypto.listCryptoHeader(cryptoId)                              
            
            this.setState({
                crypto: result.data[0]
            })          
        }        
    }

    render() {
        
        return (
            <div className='crypto-header'>
                <h1>{this.state.crypto.name}</h1>
                <h2>{this.state.crypto.symbol}</h2>
                <h3>Current Price:<br/>{this.state.crypto.current_price}</h3>
                <h3>Market Change 24h:<br/>{this.state.crypto.market_cap_change_percentage_24h}</h3>
                <h3>High 24h:<br/>{this.state.crypto.high_24h}</h3>
                <h3>Low 24h:<br />{this.state.crypto.low_24h}</h3>
            </div>
        )
    }

}

export default CryptoHeader