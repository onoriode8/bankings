import React from 'react';
import Image from '../../assests/danielBanking.jpg'; 

const userProfile = props => {

    return (
        <React.Fragment>
            <div style={{fontFamily: "Roman"}}>
                <div>
                    <img style={{width: "150px", borderRadius: "5em"}} src={Image} alt="" />
                    <p><strong>{props.userName}</strong></p>
                    <hr />
                </div>
                <div>
                    <p><strong>Address: {props.address}</strong></p>
                    <p></p>
                    <p><strong>email: {props.email}</strong></p>
                </div>
                </div>
        </React.Fragment>
    );
};

export default userProfile;