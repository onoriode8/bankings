import React, { useState } from 'react';
import NavLink from './NavLink/NavLink';
import SideDrawer from './SideDrawer/SideDrawer';

const Navigation = () => {
    const [openAccount, setOpenAccount] = useState(false);
    const [investment, setInvestment] = useState(false);
    const [card, setCard] = useState(false);
    const [loan, setLoan] = useState(false);
    const [settings, setSettings] = useState(false);
    const [sideDrawer, setSideDrawer] = useState(false);

    const openAccountHandler = () => setOpenAccount(prevState => !prevState);
    
    const investmentHandler = () => setInvestment(prevState => !prevState);

    const cardHandler = () => setCard(prevState => !prevState);

    const loanHandler = () => setLoan(prevState => !prevState);

    const settingsHandler = () => setSettings(prevState => !prevState);

    const Side = () => setSideDrawer(true); 

    return <React.Fragment>
        <header>
            <NavLink setSideDrawer={Side}
            // set openAccount to true and false
            openAccount={openAccount}
            openAccountHandler={openAccountHandler}
            investment={investment}
            investmentHandler={investmentHandler}
            card={card}
            cardHandler={cardHandler}
            loan={loan}
            loanHandler={loanHandler}
            settings={settings}
            settingsHandler={settingsHandler}
            />
        </header>
        <SideDrawer sideDrawer={sideDrawer} 
        openAccount={openAccount}
        openAccountHandler={openAccountHandler}
        investment={investment}
        investmentHandler={investmentHandler}
        card={card}
        cardHandler={cardHandler}
        loan={loan}
        loanHandler={loanHandler}
        settings={settings}
        settingsHandler={settingsHandler} 
        sideDrawerFalseHandler={() => setSideDrawer(false)}/>
    </React.Fragment>
};

export default Navigation;