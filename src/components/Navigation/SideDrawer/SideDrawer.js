import React from 'react';
// import NavLinks from '../NavLink/NavLink';
import classes from './SideDrawer.module.css';
// import { RiArrowDropDownLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as logout from '../../../store/actions';
import { BsChevronRight, BsCreditCard } from 'react-icons/bs';
import { AiOutlinePoweroff, AiOutlineLogin, AiOutlineInsurance } from 'react-icons/ai';
import { MdCardTravel, MdAccountBox } from 'react-icons/md';
import { FcMoneyTransfer, FcSettings } from 'react-icons/fc';
import { GiTakeMyMoney } from 'react-icons/gi';
import image from '../../../assests/images.png';
// import { RiBankFill } from 'react-icons/ri';


const sideDrawer = props => {
    const { openAccountHandler, openAccount, investmentHandler, investment, 
        card, cardHandler, loan, loanHandler, settingsHandler } = props;
    return <React.Fragment>
            {props.sideDrawer && <header>
                <div className={classes.backdrop} onClick={props.sideDrawerFalseHandler}></div>
            <nav className={classes.sideDrawer}>
                <div style={{display:"flex",justifyContent:"center",margin:"15px 0px"}}>
                    <div>
                        <img style={{width:"180px"}} src={image} alt="" />
                    </div>
                    {/* <div><RiBankFill style={{fontSize: "1.5em", color: "orange"}} /></div>
                    <div style={{color: "orange"}}><strong>BANK OF AMERICA</strong></div> */}
                </div><hr />
            {!props.hide ? 
               <div>
                <div onClick={openAccountHandler} style={{display: "flex",
                     justifyContent: "space-between"}}>
                    <div style={{fontSize: "1.2em",display:"flex"}}><MdAccountBox style={{fontSize:"30px"}}/>Open Account</div> 
                    <div><BsChevronRight style={{fontSize: "1.4em"}}/></div>
               </div><hr />
            {openAccount && <div>
                      <div>
                        <li onClick={props.sideDrawerFalseHandler} style={{listStyle: "none",margin: "5px 25px"}}><a style={{textDecoration: "none"}} href="/supreme/savings">Savings Account</a></li><hr />
                        <li onClick={props.sideDrawerFalseHandler} style={{listStyle: "none",margin: "5px 25px"}}><a style={{textDecoration: "none"}} href="/supreme/current">Current Account</a></li><hr />
                        <li onClick={props.sideDrawerFalseHandler} style={{listStyle: "none",margin: "5px 25px"}}><a style={{textDecoration: "none"}} href="/supreme/investment">Investment Account</a></li><hr />
                </div></div>}
            </div>: null }
            <div>
                <div onClick={investmentHandler} style={{display: "flex",
                     justifyContent: "space-between"}}>
                    <div style={{fontSize: "1.2em",display: "flex"}}><FcMoneyTransfer style={{fontSize: "27px",margin:"0px 3px"}}/>Investment</div>
                    <div><BsChevronRight style={{fontSize: "1.4em"}}/></div>
                </div><hr />
            {investment &&
                <div>
                  <div>
                    <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",display: "block",margin: "5px 25px"}} to="/supreme/personal/invest">Personal Investment</NavLink><hr />
                    <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",margin: "5px 25px"}} to="/supreme/house/invests">House Investment</NavLink><hr />
                    {/* <NavLink>Investment Account</NavLink> */}
                </div></div>}
            </div>
            <div>
                <div onClick={cardHandler} style={{display: "flex",
                     justifyContent: "space-between"}}>
                    <div style={{fontSize: "1.4em"}}><BsCreditCard style={{fontSize: "17px"}}/> Cards</div>
                    <div><BsChevronRight style={{fontSize: "1.5em"}}/></div>
                </div><hr />
            {card ? 
                <div>
                  <div>
                    <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",display: "block",margin: "5px 25px"}} to="/supreme/credit">Credit Card</NavLink><hr />
                    <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",display: "block",margin: "5px 25px"}} to="/supreme/debit">Debit Card</NavLink><hr />
                    <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",display: "block",margin: "5px 25px"}} to="/supreme/pre/gitcard">Gift Card</NavLink><hr />
                   </div>
                </div> : null }
            </div>
            <div>
                <div onClick={loanHandler} style={{display: "flex",justifyContent:"space-between"}}>
                    <div style={{fontSize: "1.4em"}}><MdCardTravel style={{fontSize: "17px", margin:"0px 3px"}}/>Loans</div><div><BsChevronRight style={{fontSize: "1.5em"}}/></div></div><hr />
            {loan ? 
                <div>
                    <div>
                    <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",display: "block",margin: "5px 25px"}} to="/home/lo">Home Loans</NavLink><hr />
                    <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",display: "block",margin: "5px 25px"}} to="/mortage/lo">Mortage Loans</NavLink><hr />
                </div></div>: null }
            </div>
            <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",display: "block", color:"black"}} to="/insurance/supreme"><div style={{display:"flex"}}><AiOutlineInsurance style={{fontSize: "25px"}}/><div style={{fontSize: "17px"}}>Insurance</div></div></NavLink><hr />
            <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",display: "block", color:"black"}} to="/supreme/financial"><div style={{display:"flex"}}><GiTakeMyMoney style={{fontSize: "25px"}}/><div style={{fontSize: "17px"}}>Financial Wellbeing</div></div></NavLink><hr />
            <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none", color: "black"}} to="/bank/customerCare">Customer Care</NavLink><hr />
            {/* </div> */}
            {props.hide && <div>
                    <div onClick={settingsHandler} 
                        style={{display: "flex",justifyContent:"space-between"}}>
                        <div style={{display: "flex"}}><FcSettings style={{fontSize: "25px",margin:"0px 5px"}}/>Settings</div> 
                        <div><BsChevronRight style={{fontSize: "1.5em"}}/></div></div><hr />
            {props.settings ? 
                    <div>
                        <div>
                        <li onClick={props.sideDrawerFalseHandler} style={{listStyle: "none"}}><a style={{textDecoration: "none",display: "block", color:"black",margin: "5px 25px"}} href="/auth">Switch Account</a></li><hr />
                        <li style={{listStyle: "none"}} onClick={props.hideBalanceHandler}>{props.hideBalance ? <p 
                              style={{color: "blue",margin: "5px 25px"}} onClick={props.sideDrawerFalseHandler}>Hide Account Balance</p> : <p onClick={props.sideDrawerFalseHandler} style={{color: "blue",margin: "5px 25px"}}
                                >Show Account Balance</p>}</li><hr />
                    </div></div> : null }
                </div>}
                <div>
            {props.hide && <div onClick={props.sideDrawerFalseHandler}><NavLink style={{textDecoration: "none",display: "flex", color:"black"}} 
                to="/auth" onClick={props.logoutHandler}><AiOutlinePoweroff style={{fontSize: "23px", margin:"0px 5px"}}/><div>Logout</div></NavLink></div>}
            </div>
            {!props.hide && 
                <NavLink onClick={props.sideDrawerFalseHandler} style={{textDecoration: "none",display: "block", color:"black"}}
                 to="/auth"><div style={{display: "flex"}}><AiOutlineLogin style={{margin:"0px 5px", fontSize:"25px"}}/>
                 <div>LOGIN</div></div></NavLink>}<hr />
                </nav> 
                </header>}   
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


export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer);