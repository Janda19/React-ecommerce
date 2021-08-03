import React from "react"
import "./signup.style.scss"
import {auth, createUserProfileDoc} from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component";

import {signUpStart} from "../../redux/user/user.action";
import {connect} from "react-redux";

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            displayName: "",
            password: "",
            confirmPassword: ''
        }
    }

    submitHandler = async (e) => {
        const {signUp} = this.props
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        signUp(displayName, email, password, confirmPassword)


        // if (password !== confirmPassword) {
        //     alert("passwords don't match ! ")
        //     return
        // }
        // try {
        //     const {user} = await auth.createUserWithEmailAndPassword(email, password)
        //     console.log(user)
        //     await createUserProfileDoc(user, {displayName})
        //
        //     await auth.signInWithEmailAndPassword(email, password)
        //
        //     this.setState({
        //         email: "",
        //         displayName: "",
        //         password: "",
        //         confirmPassword: ''
        //     })
        // } catch (e) {
        //     console.log(e)
        // }

    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {

        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign Up with email and password </span>
                <form className="sign-up-form" onSubmit={this.submitHandler}>
                    <FormInput handleChange={this.handleChange} label="name"
                               name="displayName"
                               type="text"
                               value={this.state.displayName} required
                    />
                    <FormInput handleChange={this.handleChange} type="email" label="Email"
                               name="email"
                               value={this.state.email}
                               required
                    />
                    <FormInput handleChange={this.handleChange} label="Password"
                               value={this.state.password} type="password" name="password" required
                    />
                    <FormInput handleChange={this.handleChange} label="Confirm Password"
                               value={this.state.confirmPassword} type="password" name="confirmPassword" required
                    />
                    <CustomButton type="submit"> Sign Up</CustomButton>

                </form>
            </div>
        )


    }


}

const mapDispatchToProps = (dispatch) => ({
    signUp: (displayName, email, password, confirmPassword) => dispatch(signUpStart({
        displayName,
        email,
        password,
        confirmPassword
    }))
})

export default connect(null, mapDispatchToProps)(SignUp)
