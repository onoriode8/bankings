import { connect } from "react-redux";
import * as actionAuthentication from '../../store/actions';
import { GiClick } from 'react-icons/gi';
import classes from './Auth.module.css';
import bankImage from '../../assests/Financial.jpg';

const login = props => {

    return <header className={classes.header} style={{textAlign: "center", marginTop: "200px",
             position: "relative", zIndex: "200"}}>
            <div className={classes.image}> 
                <img src={bankImage} alt="" />
            </div>
            <div className={classes.auth}>
                <h1 style={{fontFamily: "Roman", color: "#333"}}>Login To Your Account!</h1>
                <button className={classes.Button} onClick={props.loginHandler}>LOGIN <GiClick style={{
                    color: "orange",
                    fontSize: "120%"
                }}/></button>
            </div>
    </header>
};

const mapDispatchToProps = dispatch => {
    return {
        loginHandler: () => dispatch({type: actionAuthentication.LOGIN})
    }
}

export default connect(null, mapDispatchToProps)(login);