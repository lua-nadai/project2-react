import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CryptoCard from './CryptoCard'


export default class CryptoList extends Component {
    
    render(){
        return (
            <>
                <div className="list-group">
                    <li className="list-group-item"> 
                        {this.props.cryptos.map( crypto => <Link to= {`/market-crypto/${crypto.id}`} key = {crypto.id}> <CryptoCard {...crypto} /></Link>)}
                    </li>
                </div>
            </>
        )
    }
}
