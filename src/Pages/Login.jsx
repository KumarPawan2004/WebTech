import '../CSS/Login.css';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login (){ 
    const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
       

        const emailval = localStorage.getItem("useremail")
        const passwordval=localStorage.getItem("password")

        if(email===emailval && password===passwordval){
            navigate("/Profile");

        }
        else{
            alert("Invalid email and password")
        }
     }
    const quickdemo = ()=>{
        setEmail("demo@webtech.practice")
        setPassword("123456")
    }
    return(
        <>
        <div className="login-page">
        <div className="main-container">
        <h2 id="Welcome">Welcome Back 👋</h2>
        <p className="msg1">Sign in to continue to your dashboard</p>

        <form onSubmit={handleSubmit}>
            
        <Input 
            label="Email Address"
            type="text" 
            id="email" 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required = {true}
            placeholder="Enter your email" 
            errorID="email-show-error"
            variant='login'
        />
        <Input
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required = {true}
            placeholder="Enter your password"
            errorID="pass-show-error"
            variant='login'
         />   
     
            <div class="checkbox-row">
                <input type="checkbox" id="remember"/> 
                <label for="remember">  Remember me for 30 days</label> 
                <span id="forget" >Forgot Password?</span>
            </div>

            <Button 
              type="submit" 
              id="submit"
              text="Sign In"
              variant="login"
           
            />

            <p className="msg">New to WebTech Practice? <span id="create" onClick={()=>{navigate("/Signup")}}>Create an account</span></p>
            <Button 
              id="demo" 
              type="button"
              text="&#9889; Quick Demo"
              variant='demo'
              onClick={quickdemo}/>
        </form>
    </div>

    <Button 
      id="tips"
      text="💡 Tips" 
      variant="tips"
      onClick  = {()=>{navigate("/Tips")}}
     />
     </div>
    </>
    
    )
}

export default Login;