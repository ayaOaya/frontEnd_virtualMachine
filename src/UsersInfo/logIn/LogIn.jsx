import "./style.scss"

const LogIn = () => {
  return (
    <>
    <div className="log-In">
    <div className="img"></div>
    <div className="form">
        <h1 className="login-h1">Log In</h1>
        <p className="descr">Welcome to virtual machine platform.
        <br /> 
        Register as a memeber to experience.</p>
        <div className="form-input">
        <h3 className="Email">E-mail</h3>
        <input type="email" name="email" id="email" />
        <button type="submit" className="loginAccount">Log In</button>
        </div>

        <h3 className="login">Not a member? <a href="/signup">sign up</a></h3>
    </div>
    </div>
    </>
  )
}

export default LogIn