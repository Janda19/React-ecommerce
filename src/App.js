import React from 'react';
import './App.css';

import {Route, Switch} from "react-router-dom";
import {HomePage} from './pages/homepage/homepage.component'
import Shop from "./pages/shop/shop.component";
import {Header} from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeUser = null

    componentDidMount() {
        this.unsubscribeUser = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount() {
        this.unsubscribeUser() // to unsubscribe the user
    }


    render() {
        return (
            <div>
                <Header user={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/signin" component={SignInSignUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;
