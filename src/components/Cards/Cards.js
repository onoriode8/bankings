import React from 'react';
import { MdPayment } from 'react-icons/md';


const card = props => {
    return <React.Fragment>
             <div style={{cursor: "pointer"}}>
                <div>
                    <MdPayment 
                    style={{ 
                        color: "orange", 
                        fontSize: "2.5em",
                        width: "80%"
                    }}/>
                </div>
                Card
            </div>
    </React.Fragment>
};


export default card;