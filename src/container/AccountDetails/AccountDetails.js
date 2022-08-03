// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import classes from './AccountDetails.module.css';
import UserBills from '../../components/userBills/userBills';
import axiosInstance from '../../components/AxiosInstance/Axios';
import { connect } from 'react-redux';
// import * as hideBalanceAction from '../../../store/action';

const AccountDetails = props => {
    const [userName, setUserName] = useState("");
    const [spinner, setSpinner] = useState(false);
    const [accountNumber, setAccountNumber] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    useEffect(() => {
        setSpinner(true);
        axiosInstance.get("/DanielsBanking.json")
        .then(response => {
            setSpinner(false)
            setAccountNumber(response.data.accountNumber);
            setUserName(response.data.userName)
            setUserBalance(response.data.accountBalance);
        })
        .catch(() => {});
    }, []);

    return <React.Fragment>
        <div style={{textAlign: 'center', marginTop: "1.5em"}}>
            <div className={classes.account}>
                {props.hideBalance && <div style={{textAlign: "center", fontSize: "1.3em", marginBottom: "8px"}}><strong style={{fontSize:"20px"}}>$</strong>{userBalance} USD  { spinner && "Loading..." }</div>}
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <div>
                        <div>Account Name</div>
                        <div>{userName.toUpperCase()}</div>
                    </div>
                    <div>
                        <div>Account Number</div>
                        <div>{accountNumber}</div>
                   </div>
                </div>
            </div>
        </div>
        <div style={{textAlign: "center"}}>
            <p style={{fontSize: "1.3em", color: "blue"}}></p>
        </div>
        <hr />
        <UserBills />
    </React.Fragment>
};

const mapStateToProps = state => {
    return  {
        hideBalance: state.hideBalance
    }
}


export default connect(mapStateToProps)(AccountDetails);