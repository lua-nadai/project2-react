import React, { Component } from 'react'
import CryptoCard from './CryptoCard'

export default class CryptoList extends Component {
    
    render(){
        return (
            <div className="list-group">
                <p className="list-group-item">{this.props.cryptos.map(crypto => <CryptoCard {...crypto}/>)}</p>
            </div>
        )
    }
}
