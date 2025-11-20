import '../CSS/Signup.css';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function SignUp () {
  const navigate = useNavigate()
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[confirmPassword,setconfirmPassword]=useState("")
  
  const[nameError,setnameError]=useState("")
  const[emailerror,setemailError]=useState("")
  const[passwordError,setpasswordError]=useState("")
  const[confirmerror,setconfirmError]=useState("")
  const handleSubmit = (e) =>{

    let valid = true;
    e.preventDefault()

    if(name.trim() === ""){
      setnameError("Enter a valid name")
      valid=false
    }else{
      setnameError("")
    }

    if(!email.includes("@")){
        setemailError("Enter a valid email")
        valid=false
    }else{
      setemailError("")
    }

    if(password.length < 6){
        setpasswordError("Password must be at least 6 characters long.")  
        valid=false    
    }
    else{
      setpasswordError("")
    }

    if(confirmPassword!==password){
      setconfirmError("Passwords do not match")
      valid=false
    }
    else{
      setconfirmError("")
    }

    if(valid){

      localStorage.setItem("username",name)
      localStorage.setItem("useremail",email)
      localStorage.setItem("password",password)

      navigate("/Login")
     
    }
   
    
  }
    return(
      <div className="signup-page">
        <div className="main">
        <h2>Create your account <span className="star">&#9733;</span></h2>
        <p className="para">Sign up to access the practice dashboard.</p>
        <form onSubmit={handleSubmit}>
            <div className="input">
                
             <Input 
               label="First name"
               type="text" 
               id="fname" 
               value={name}
               onChange={(e)=>{setName(e.target.value)}}
               required = {true} 
               placeholder="Enter first name"
               variant='signup'
               errorText={nameError}
             />
             <Input 
               label="Last name"
               type="text" 
               id="lname" 
               placeholder="Enter last name"
               variant='signup'
             />
                
            </div>
            <div className="input1">
               <Input
                 label="Email"
                 type="email" 
                 id="email" 
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}
                 required = {true}
                 placeholder="Enter your email"
                 errorText={emailerror}
                //  errorID="email-show-error"
                 variant='signup'
                 
               />
            </div>
            <div className="input input-pswrd">
              <Input
                 label="Password"
                 type="password" 
                 id="pswrd" 
                 value={password}
                 onChange={(e)=>{setPassword(e.target.value)}}
                 required = {true}
                 placeholder="Minimum 6 characters"
                 errorText={passwordError}
                //  errorID="pass-show-error"
                 variant='signup'
             />
             <Input
                 label="Confirm password"
                 type="password" 
                 id="cnfpwd" 
                 value={confirmPassword}
                 onChange={(e)=>{setconfirmPassword(e.target.value)}}
                 required = {true}
                 placeholder="Confirm your password"
                 errorText={confirmerror}
                 variant='signup' 
             />
            </div>
        
        <hr id="hr"/>
        <div className="check">
           <input type="checkbox"  id="check" required/>
            <label for="check">  I agree to the  <span className="Terms"> Terms</span></label>
        </div>
        
        <Button
          type="submit" 
          id="submit"
          text="Create Account"
          variant='signup'
         
        />

    </form>

        <p id="msg">Already have an account? <span id="Sign" onClick={()=>{navigate("Login")}}>Sign in</span></p>
        {/* <button className="demo1" id="demo">Seed Demo Users</button> */}
    </div>
    </div>
    )
}
export default SignUp;