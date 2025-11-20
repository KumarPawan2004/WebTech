import "../CSS/Security.css"
import Sidebar from '../Components/Sidebar';
import Header from "../Components/Header";
import Scard from "../Components/Scard";
function Security(){
    return(
        <div className="security-page">
        <div id="main-container">
        {/* <!-- LEFT SIDE CONTENT --> */}
        <div id="left-content">
        <Sidebar />
        </div>
    
    {/* <!-- MAIN CONTENT --> */}

    <div id="main-content">
        <Header/>
        <Scard />



    </div>


    </div>
    </div>
    )
}
export default Security;