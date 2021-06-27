import React from "react"
import "./header.style.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/shop" className="option">
                CONTACT
            </Link>
            {
                !currentUser ?
                    (<Link to="/signin" className="option">
                        SIGNIN
                    </Link>) :
                    (
                        <Link to="/" onClick={() => auth.signOut()} className="option">
                            SIGNOUT
                        </Link>
                    )
            }

        </div>
    </div>
)
// state is the rootReducer
const mapStateToProps = state => (
    {
        currentUser: state.user.currentUser
    }
)
export default connect(mapStateToProps)(Header)

