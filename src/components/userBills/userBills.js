import React, { useState } from 'react';
import Transfer from '../Transfer/Transfer';
import Card from '../Cards/Cards';
import Airtime from '../Airtime/Airtime';

const UserBills = props => {
    const [transfer, setTransfer] = useState(false);
    // const [card, setCard] = useState(false);
    // const [airtime, setAirtime] = useState(false);


    return <React.Fragment>
            <header style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <Transfer transfer={transfer} 
                   transferHandlerTrue={() => setTransfer(true)}
                   transferHandlerFalse={() => setTransfer(false)}
                />
                <Card />
                <Airtime />
            </header>
    </React.Fragment>
};


export default UserBills;