import '../CSS/Signup.css';
import Input from '../Components/Input';
function SignUp () {
    return(
        <div className="main">
        <h2>Create your account <span className="star">&#9733;</span></h2>
        <p className="para">Sign up to access the practice dashboard.</p>
        <form >
            <div className="input">
                

             <Input 
               label="First name"
               type="text" 
               id="fname" 
               required = {true} 
               placeholder="Enter first name"
               variant='signup'
             />
             <Input 
               label="Last name"
               type="text" 
               id="lname" 
               placeholder="Enter first name"
               variant='signup'
             />
                
            </div>
            <div className="input1">
               <Input
                 label="Email"
                 type="email" 
                 id="email" 
                 required = {true}
                 placeholder="Enter your email"
                 errorID="email-show-error"
                 variant='signup'
               />
            </div>
            <div className="input input-pswrd">
              <Input
                 label="Password"
                 type="password" 
                 id="pswrd" 
                 required = {true}
                 placeholder="Minimum 6 characters"
                 errorID="pass-show-error"
                 variant='signup'
             />
             <Input
                 label="Confirm password"
                 type="password" 
                 id="cnfpwd" 
                 required = {true}
                 placeholder="Confirm your password"
                 errorID="conf-show-error"
                 variant='signup' 
             />
            </div>
        
        <hr id="hr"/>
        <div className="check">
           <input type="checkbox"  id="check" required/>
            <label for="check">  I agree to the  <span className="Terms"> Terms</span></label>
        </div>
        <button type="submit" className="create" id="save">Create Account</button>

    </form>

        <p id="msg">Already have an account? <span id="Sign">Sign in</span></p>
        <button className="demo1" id="demo">Seed Demo Users</button>
    </div>
    )
}
export default SignUp;