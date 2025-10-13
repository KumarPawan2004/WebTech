import '../Css/Navbar.css';
const Navbar = ()=>{
    return(
        <div className="navbar">
            <div><h2>WebTech Practice</h2></div>
            <div className="btns">  
                <button>About</button>  
                <button>Services</button>
                <button>Theme</button>
                <button>Login</button>
                <button>SignUp</button>
             </div>
        </div>
    )
}

export default Navbar;