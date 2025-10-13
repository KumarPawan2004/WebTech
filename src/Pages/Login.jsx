import '../CSS/Login.css';
import Input from '../Components/Input';
// import Button from '../Components/Button';
function Login (){
    return(
        <>
        <div className="main-container">
        <h2 id="Welcome">Welcome Back 👋</h2>
        <p className="msg1">Sign in to continue to your dashboard</p>

        <form>
            
        <Input 
            label="Email Address"
            type="text" 
            id="email" 
            required = {true}
            placeholder="Enter your email" 
            errorID="email-show-error"
            variant='login'
        />
        <Input
            label="Password"
            type="password"
            id="password"
            required = {true}
            placeholder="Enter your password"
            errorID="pass-show-error"
            variant='login'
         />   
     
            <div class="checkbox-row">
                <input type="checkbox" id="remember"/> 
                <label for="remember">Remember me for 30 days</label> 
                <span id="forget" >Forgot Password?</span>
            </div>

            <button type="submit" id="submit">Sign In</button>

            <p className="msg">New to WebTech Practice? <span id="create">Create an account</span></p>
            <button id="demo" type="button">&#9889; Quick Demo</button>
        </form>
    </div>

    <button id="tips" >💡 Tips</button>
    </>
    )
}

export default Login;