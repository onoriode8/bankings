import React, { useState, useEffect } from 'react';
import AccountDetails from '../AccountDetails/AccountDetails';
// import { RiBankFill } from 'react-icons/ri';
import UserProfile from '../../components/userProfile/userProfile';
import axiosInstance from '../../components/AxiosInstance/Axios';
import image from "../../assests/images.png";

// let users = [
//     {
//         userName: "David Mark",
//         userId: "m1",
//         phone: "61 0437602874",
//         Address: "No 11 Lowthers St Yarrabilba Brisbane Qld 4207"
//     }
// ];


const Users = props => {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        axiosInstance.get("/DanielsBanking.json")
            .then(res => {
                let fetchData = [res.data];
                setUsers(fetchData)
            })
            .catch(() => {});
    }, []);


    let Users = <p>Loading...</p>

    if(user.length !== 0) {
        Users = user.map(user => <UserProfile 
            key={user.accountNumber} userName={user.userName}
            email={user.email} address={user.Address} />)
    }

    return <React.Fragment>
        <div style={{ 
            display: "flex",
            justifyContent: "space-around",
            cursor: "pointer",
            marginTop: "7em"
        }}>
            {/* <p style={{color: "blue", fontSize: "1.3em"}}>
                {/* <RiBankFill style={{fontSize: "1.5em", color: "orange"}} /> */}
                {/* BANK OF AMERICA */}
            {/* </p>  */}
            <div>
                <img style={{width:"120px"}} 
                src={image} alt="" />
            </div>
                {Users}
        </div>
        <div>
            <AccountDetails />
        </div>
    </React.Fragment>
};


export default Users;