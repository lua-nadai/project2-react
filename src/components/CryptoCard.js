import React from 'react'



const CryptoCard = (props) => {
    return (
        <div className='crypto-card'>
            <img src = {props.image} width = '30px'/>
            <h3>{props.name}</h3>
            <p><b>Current Price:</b><br/> {props.current_price}</p>
            <p><b>High 24h:</b><br/> {props.high_24h}</p>
        </div>
    )
}

export default CryptoCard