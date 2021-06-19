import React from "react"
import "./signin-signup.style.scss"
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const SignInSignUp = () => (
    <div className="sign-in-and-sign-up">

        <div className="sign-in-sign-up-container">
            <SignIn/>
            <SignUp/>
        </div>
    </div>
)


export default SignInSignUp
