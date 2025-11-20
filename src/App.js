
import Landing from './HTMLcomponent/Landing';
import Notification from './HTMLcomponent/Notification';
import Help from './HTMLcomponent/Help';
import Overview from './HTMLcomponent/Overview';
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
      <Route  path='/' element={<Landing  />}/>
      <Route  path='/Notification' element={<Notification  />}/>
      <Route  path='/Help' element={<Help  />}/>
      <Route path='/Overview' element={<Overview />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/Tips" element={<Tips/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Security" element={<Security/>}/>
       
      </Routes>
      </BrowserRouter>


   
    </div>
  );
}

export default App;
