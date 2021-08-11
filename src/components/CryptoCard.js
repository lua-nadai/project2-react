import React from 'react'

const CryptoCard = (props) => {
    return (
        <div className='crypto-card'>
            <h3>{props.name}</h3>
            <p>{props.highvalue}</p>
            <p>{props.lastvalue}</p>
        </div>
    )
}

export default CryptoCard