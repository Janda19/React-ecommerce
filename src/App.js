import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {auth, createUserProfileDoc} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.action"

import {HomePage} from './pages/homepage/homepage.component'
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";


import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import Checkout from "./pages/checkout/checkout.component";

class App extends React.Component {


    unsubscribeFromAuthListener = null

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.unsubscribeFromAuthListener = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDoc(userAuth)

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                setCurrentUser(userAuth)
            }

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuthListener() // to unsubscribe from listening to auth change
    }


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    {/*passing props in a route : */}
                    {/*<Route exact path="/" render={(props) => <HomePage name="janda"/>} />*/}
                    <Route path="/shop" component={Shop}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route exact path="/signin" render={() =>
                        this.props.currentUser ? (
                            <Redirect to='/'/>
                        ) : (
                            <SignInSignUp/>
                        )
                    }/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // collectionArray: shopSelectorData
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
