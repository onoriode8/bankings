import React, { useState, useEffect } from 'react';
import axiosInstance from '../../components/AxiosInstance/Axios';
import classes from './userAccount.module.css';

const UserAccount = props => {
    const [accountNumber, setAccountNumber] = useState(null);
    const [accountName, setAccountName] = useState(null);
    const [accountBalance, setAccountBalance] = useState(null);

    useEffect(() => {
        axiosInstance.get('/DanielsBanking.json')
         .then(response => {     
            setAccountName(response.data.userName);
            setAccountNumber(response.data.accountNumber);
            setAccountBalance(response.data.accountBalance)
         }).catch(() => {});
    }, []);

    return <React.Fragment>
        <header className={classes.userAccount}>
                <div className={classes.userContainer}>
                    <div>
                        <div>Status: Savings</div>
                    </div>
                    <div>
                        <div><strong>{accountNumber}</strong></div>
                        <div style={{fontSize: "1.3em"}}><strong>${accountBalance} USD</strong></div>
                    </div>
                    <div>
                        {accountName !== null &&
                        <div>
                            <strong>{accountName.toUpperCase()}</strong>
                        </div> }
                    </div>
              </div>
        </header>
    </React.Fragment>
};


export default UserAccount;