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
            <div>
                <h1>{this.state.crypto.name}</h1>
                {/* {console.log(this.state.cryptoList[0].name)} */}

            </div>
        )
    }

}

export default CryptoHeader