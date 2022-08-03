import React from 'react';
import { GiVibratingSmartphone } from 'react-icons/gi';


const airtime = props => {
    return <React.Fragment>
             <div style={{cursor: "pointer"}}>
                <div>
                    <GiVibratingSmartphone style={{ 
                        color: "orange", 
                        fontSize: "2.5em",
                        width: "80%"
                    }}/>
                </div>
                Data
            </div>
    </React.Fragment>
};


export default airtime;