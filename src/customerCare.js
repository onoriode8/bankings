import React, { useState, useEffect } from 'react';
import customerService from './assests/customerService.jpg';
import classes from './customerCare.module.css';
import ImageBank from './assests/imageBankOfAmerica.jpg';
import { FaPhone } from 'react-icons/fa';
import axiosInstance from './components/AxiosInstance/Axios';


const CustomerCare = () => {
    const [customerPhone, setCustomerPhone] = useState(null);

    useEffect(() => {
        axiosInstance.get("/DanielsBanking.json")
            .then(res => setCustomerPhone(res.data.phone))
            .catch(() => {})
    }, []);

    return <React.Fragment>
        <p style={{marginTop: "5em"}}>CUSTOMER SERVICE</p>
        <div className={classes.container}>
            <div>
                <img src={ImageBank} className={classes.bankImage} alt="" />
            </div>
            <div>
            <p style={{color: "blue"}}>Customer Service</p>
            <h1 style={{color: "blue"}}>Reach out to our Customer Service concerning Bank Of America for more informations</h1>
                <div>
                    <img className={classes.customerServiceImage} src={customerService} alt='' />
                </div>
            </div>
            <div className={classes.contain}>
                <div className={classes.bord}>
                    <div style={{fontSize: "1.5em"}}>Customer Service</div>
                    <div style={{fontSize: "1em"}}>Contact us on <FaPhone style={{color: "blue"}} /> +1 {customerPhone}</div>
                </div>
            </div>
        </div>
    </React.Fragment>
};

export default CustomerCare;