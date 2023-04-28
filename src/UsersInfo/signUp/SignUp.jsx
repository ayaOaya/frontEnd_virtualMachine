import "./style.scss"

const SignUp = () => {
  return (
    <>
    <div className="sign-up">
    <div className="img"></div>
    <div className="form">
        <h1 className="signUp">Sign Up</h1>
        <p className="descr">Welcome to virtual machine platform.
        <br /> 
        Register as a memeber to experience.</p>
        <div className="form-input">
        <h3 className="Email">E-mail</h3>
        <input type="email" name="email" id="email" />
        <h3 className="psswd">Password</h3>
        <input type="password" name="password" id="psswd" />
        <div className="check">
            {/* make a chebox here */}
            <input type="radio"/>
            <p className="checkBoxDesc">I agree to the term of service</p>
        </div>
        <button type="submit" className="createAccount">Create Account</button>
        </div>

        <h3 className="login">Already a member? <a href="/login">Log in</a></h3>
    </div>
    </div>
    </>
  )
}

export default SignUp