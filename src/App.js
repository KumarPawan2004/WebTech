// import "./App.css"
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile"
// import Security from "./Pages/Security";
import Tips from "./Pages/Tips";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/Tips" element={<Tips/>}/>

        <Route path="/Profile" element={<Profile/>}/>
        {/* <Route path="/Security" element={<Security/>}/> */}
       
      </Routes>
      </BrowserRouter>

 
      {/* <SignUp/> */}
         {/* <Login/> */}
      {/* <Profile /> */}
      {/* <Security /> */}
      
       {/* <Tips /> */}
   
    </div>
  );
}

export default App;
