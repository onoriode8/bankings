import React from 'react';
import { BiTransferAlt } from 'react-icons/bi';
import TransferModal from './TransferModal/TransferModal';

const Transfer = props => {
    return <React.Fragment>
        <div style={{cursor: "pointer"}} onClick={props.transferHandlerTrue}>
            <div>
                <BiTransferAlt  
                style={{ 
                    color: "orange", 
                    fontSize: "2.5em",
                    width: "80%"
                }} />
            </div>
            Transfer
        </div>
        <TransferModal transfer={props.transfer}
            transferHandlerFalse={props.transferHandlerFalse}
         />
    </React.Fragment>
};

export default Transfer;