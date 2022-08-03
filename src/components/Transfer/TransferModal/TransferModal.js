import React from 'react';
import classes from './TransferModal.module.css';
import { Link } from 'react-router-dom';

const transferModal = props => {
    return <React.Fragment>
        {props.transfer && 
        <div>
            <div className={classes.backDrop} onClick={props.transferHandlerFalse}></div>
            <div className={classes.container}>
            <div className={classes.TransferModal}>
                <div className={classes.send}>
                   <div>Send Money</div>
                    <div onClick={props.transferHandlerFalse}>X</div>
                </div>
                <hr />
                <Link to={`/${props.id}/supreme/transfer`}>
                    <div className={classes.localTransfer}>Local Transfer</div>
                </Link>
            </div>
            </div> 
        </div>
            }
    </React.Fragment>
};

export default transferModal;