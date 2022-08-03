import React, { useState, useEffect, useRef } from 'react';
import UserAccount from '../userAccount/userAccount';
import TransferTo from '../TransferTo/TransferTo';
import { BiArrowBack } from 'react-icons/bi';
import { withRouter } from 'react-router-dom';

const LocalTransfer = (props) => {
    const [showAccount, setShowAccount] = useState(false);
    const [input, setInput] = useState("");
    
    const inputElement = useRef();

    useEffect(() => {
        inputElement.current.focus();
    }, []);



    return <React.Fragment>
            <div style={{marginTop: "6em"}}>
                <div onClick={() => props.history.goBack()} style={{margin: "3em 3px"}}><BiArrowBack 
                     onClick={() => props.history.goBack()} style={{fontSize: "2em",margin:"20px 0px"}}/></div>
                <div>AMOUNT</div>
                   <div style={{display: "flex", justifyContent: "space-around"}}>
                        <div style={{fontSize: "2em", color: "orange", marginTop: "27px"}}>$</div>
                        <input ref={inputElement} type="number" placeholder="Amount"
                          onChange={(event) => setInput(event.target.value)} required
                          style={{padding: "20px 10px", margin: "20px 0px"}} />
                   </div>
                   <div>
                       <div onClick={() => {
                           const show = showAccount;
                           setShowAccount(!show)}
                           }>My Account</div>
                   </div>
                    {showAccount && <div>
                        <UserAccount />
                        Destination
                        <TransferTo inputAmount={input}/>
                    </div>}
            </div>
    </React.Fragment>
};

export default withRouter(LocalTransfer);