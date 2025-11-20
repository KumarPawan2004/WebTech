import "../CSS/Profile.css"
import Sidebar from '../Components/Sidebar';
import Header from "../Components/Header";
import Pcard from "../Components/Pcard";
function Profile(){
    return(
    <div className="profile-page">
    <div id="main-container">
        {/* <!-- LEFT SIDE CONTENT --> */}
        <div id="left-content">
        <Sidebar />
        </div>

    {/* <!-- MAIN CONTENT --> */}

    <div className="main-content">
        < Header />
        <div className="scroll-area">
        <Pcard />
        </div>
               
       


 


    </div>    
</div>
</div>
 )
}

export default Profile;