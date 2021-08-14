import React from 'react'
import { Switch, Route } from "react-router-dom";
import CryptoHeader from './CryptoHeader';
import CryptoList from './CryptoList';



const MarketRouter = (props) => {
    return (
        <>
            <CryptoList {...props} />

            <Switch>
                <Route 
                    path = {`${props.match.path}/:id`} 
                    render = {(props)=><CryptoHeader {...props}/>}
                    
                />
            </Switch>
            
        </>
    )
}

export default MarketRouter
