import React from "react"
import "./signin-signup.style.scss"
import SignIn from "../../components/signin/signin.component";

const SignInSignUp = () => (
    <div className="sign-in-and-sign-up">
        <h2>I already have an account</h2>
        <span>Sign In with email and password </span>

        <SignIn/>
    </div>
)


export default SignInSignUp
