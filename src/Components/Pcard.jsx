import "../CSS/Pcard.css";
import Input from "./Input";
import Button from "./Button";
function Pcard(){
    return(
        <div className="main-dash">
            <h3 className="head">Profile Settings</h3>
            
            <h4 className="prefer" >👤    Personal Information</h4>

            <form action="">
            <div className="inp-div">
                <Input 
                  label="Full Name" 
                  type="text" 
                  placeholder="Enter full name" 
                  required = {true}
                  variant='profile'/>

                  <Input 
                   label="Date of Birth" 
                   type="date" 
                   required = "true"
                   variant='profile'/>
                
            </div>
            <div className="inp-div">
                <Input 
                  label="Email Address" 
                  type="email" 
                  placeholder="Enter your email" 
                  required = {true}
                  variant='profile'/>

                  <Input 
                   label="Phone Number" 
                   type="tel" 
                   placeholder="Enter phone number" 
                   required = {true}
                   variant='profile'/>
                
            </div>

            <div className="add">
               💡  <span className="bulb"> Address Information</span>
            </div>
            <div className="inp-div">
                <Input 
                  label="Street Address" 
                  type="text" 
                  id="address" 
                  placeholder="Enter full address" 
                  required = {true}
                  variant='profile'/>
              
            </div>
            <div className="inp-div">
                <Input
                  label="Pin Code" 
                  type="number" 
                  placeholder="Enter PIN" 
                  required = {true}
                  variant='profile'/>

                  <Input
                  label="City" 
                  type="text" 
                  placeholder="Enter city name" 
                  required = {true}
                  variant='profile'/>
        
            </div>
            <div className="inp-div">
                <Input
                  label="Country" 
                  type="text" 
                  placeholder="Enter country name" 
                  required = {true}
                  variant='profile'/>

                  <Input
                  label="Github Profile" 
                  type="text" 
                  placeholder="Enter profile" 
                  variant='profile'/>
           
            </div>
            {/* <span id="saved"></span> */}
            <div className="button">
                <Button
                 text="Cancel Changes"
                 variant='profile'
                 type="button"/>

                 <Button
                 text="💾    Save Changes"
                 id="Save-btn"
                 variant='profile'
                 type="submit"/>
                
             
            </div>
        </form>            
        


        </div>     




    )
}
export default Pcard;