import React, { useState, useEffect, useRef } from 'react';
import axiosInstance  from '../../components/AxiosInstance/Axios';
import classes from './TransferTo.module.css';

const TransferTo = props => {
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [beneficiaryName, setBeneficiaryName] = useState("");
    const [success, setSuccess] = useState(null);
    const [spinner, setSpinner] = useState(false);

    const inputElement = useRef();

    useEffect(() => {
        inputElement.current.focus();
        // post the user bank name, number and beneficiary name to a database
    }, []);

    const sendMoneyHandler = (e) => {
      setSpinner(true);
      e.preventDefault();
      const transferDetails = {
          bankName: bankName.toUpperCase(),
          accountNumber: accountNumber,
          beneficiaryName: beneficiaryName.toUpperCase(),
          AmountToSend: props.inputAmount
      }
      axiosInstance.post("/sendMoney.json", transferDetails)
        .then(response => {
            setSpinner(false);
            setSuccess("It's from our end. We're working on it");
            setTimeout(() => {
              setSuccess(null);
            }, 10000);
            setBankName("");
            setAccountNumber("");
            setBeneficiaryName("");
        })
        .catch(() => {});
    };

    let send = <button className={classes.sendButton} disabled>send</button>
    if(bankName.trim().length >= 3) {
      if(accountNumber.trim().length > 8) {
        if(beneficiaryName.trim().length >= 6) {
           if(props.inputAmount.trim()) {
              send = <button className={classes.sendButton} type="submit">SEND</button>
           }
        }
      }
    }

    return <React.Fragment>
        {spinner && <div style={{textAlign: "center"}} className={classes.loader}>Loading...</div>}
        <p style={{textAlign: "center", fontFamily: "Roman", color: "green", fontSize: "2em"}}>{success}</p>
        <form className={classes.transforForm} onSubmit={sendMoneyHandler}>
            <input ref={inputElement} className={classes.bankName} 
                onChange={(e) => setBankName(e.target.value)}
                type="text" placeholder="Bank Name" required />
              <br />
            <input className={classes.bankNumber} 
                onChange={(e) => setAccountNumber(e.target.value)}
                type="number" placeholder="Account Number" required />
              <br />
            <input className={classes.beneficiaryName} 
                onChange={(e) => setBeneficiaryName(e.target.value)}
                type="text" placeholder="Beneficiary Name" required />
              <br />
            <input type="reset" value="reset" 
               style={{width: "15%", backgroundColor: "orange",
               color: "#fff",
               borderRadius: "2em", marginBottom: "15px"}} />
              <br />
              {send}
        </form>
    </React.Fragment>

};

export default TransferTo;