import React from 'react';
import classes from './NavLink.module.css';
import { connect } from 'react-redux';
import * as logout from '../../../store/actions';
// import { RiBankFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';
import image from '../../../assests/images.png';

const navlink = (props) => {
    const { openAccountHandler, openAccount, investmentHandler, investment, 
        card, cardHandler, loan, loanHandler, settingsHandler, setSideDrawer } = props;
    return <React.Fragment>
        <div className={classes.container}>
        <ul className={classes.Navlink}>
               <div className={classes.menu} onClick={setSideDrawer}><AiOutlineMenu style={{fontSize:"1.5em",color:"blue"}}/></div>
                <div className={classes.icon}>
                <div>
                    <img style={{width:"180px"}} src={image} alt="" />
                </div>
                    {/* <div><RiBankFill style={{fontSize: "1.5em", color: "orange"}} /></div>
                    <div style={{color: "orange"}}><strong>BANK OF AMERICA</strong></div> */}
                </div>
                {!props.hide ? <div className={classes.list}>
                <div onMouseEnter={openAccountHandler}
                 style={{color: "#fff", display: "flex"}}><div>Open Account</div> 
                    <div><RiArrowDropDownLine 
                    style={{fontSize: "1.5em"}}/></div>
                    </div>
                {openAccount && 
                <div className={classes.account}>
                    <div className={classes.accounts}>
                        <li><a className={classes.account} href="/supreme/savings">Savings Account</a></li>
                        <li><a className={classes.account} href="/supreme/current">Current Account</a></li>
                        <li><a className={classes.account} href="/supreme/investment">Investment Account</a></li>
                </div></div>}
            </div>: null }
            <div>
                <div onMouseEnter={investmentHandler} className={classes.invests}>
                    <div>Investment</div>
                    <div><RiArrowDropDownLine style={{fontSize: "1.5em"}}/></div>
                </div>
                {investment &&
                <div className={classes.investment}>
                  <div className={classes.invest}>
                    <NavLink className={classes.investment} to="/supreme/personal/invest">Personal Investment</NavLink>
                    <NavLink className={classes.investment} to="/supreme/house/invests">House Investment</NavLink>
                    {/* <NavLink>Investment Account</NavLink> */}
                </div></div>}
            </div>
            <div>
                <div onClick={cardHandler} className={classes.Cards}>
                    <div>Cards</div>
                    <div><RiArrowDropDownLine style={{fontSize: "1.5em"}}/></div>
                </div>
                {card ? 
                <div className={classes.cards}>
                  <div>
                    <NavLink className={classes.card} to="/supreme/credit">Credit Card</NavLink>
                    <NavLink className={classes.card} to="/supreme/debit">Debit Card</NavLink>
                    <NavLink className={classes.card} to="/supreme/pre/gitcard">Gift Card</NavLink>
                   </div>
                </div> : null }
            </div>
            <div>
                <div onClick={loanHandler} className={classes.Loans}>
                    <div>Loans</div><div><RiArrowDropDownLine style={{fontSize: "1.5em"}}/></div></div>
                {loan ? 
                <div className={classes.loans}>
                    <div>
                    <NavLink className={classes.loan} to="/home/lo">Home Loans</NavLink>
                    <NavLink className={classes.loan} to="/mortage/lo">Mortage Loan</NavLink>
                </div></div>: null }
            {/* </div> */}
            {/* <div><div>
            <div>
                <NavLink className={classes.insurance} to="/insurance/supreme">Insurance</NavLink>
                <NavLink className={classes.financial} to="/supreme/financial">Financial Wellbeing</NavLink>
                </div></div>
                : null } */}
            </div>
            {/* <div className={classes.Insurance}> */}
            <NavLink className={classes.insurance} to="/insurance/supreme">Insurance</NavLink>
            <NavLink className={classes.financial} to="/supreme/financial">Financial Wellbeing</NavLink>
            <NavLink className={classes.financial} to="/bank/customerCare">Customer Care</NavLink>
            {/* </div> */}
                {props.hide && <div>
                    <div className={classes.set} onClick={settingsHandler}>
                        <div>Settings</div> 
                        <div><RiArrowDropDownLine style={{fontSize: "1.5em"}}/></div></div>
                    {props.settings ? 
                    <div className={classes.setting}>
                        <div>
                        <li><a className={classes.settings} href="/auth">Switch Account</a></li>
                        <li onClick={props.hideBalanceHandler}
                            >{props.hideBalance ? <p 
                              style={{color: "blue"}}>Hide Account Balance</p> : <p style={{color: "blue"}}
                                >Show Account Balance</p>}</li>
                    </div></div> : null }
                </div>}
                <div className={classes.Logout}>
                    {props.hide && <NavLink className={classes.logout} to="/auth" onClick={props.logoutHandler}>Logout</NavLink>}
            </div>
            {!props.hide && <NavLink className={classes.login} to="/auth">Log In</NavLink>}
            {/* {!props.hide && <NavLink className={classes.login} to="/auth">LOGIN</NavLink>} */}
        </ul>
      </div>
    </React.Fragment>
};

const mapStateToProps = state => {
    return {
        hide: state.isAuthentication,
        hideBalance: state.hideBalance
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutHandler: () => dispatch({type: logout.LOGOUT}),
        hideBalanceHandler: () => dispatch({type: logout.HIDE_BALANCE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navlink);