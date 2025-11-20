import '../Css/Navbar.css';

const Navbar = () => {

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleTheme = () =>{
        alert("This feature is not available");
    }

    return (
        <div className="navbar">
            <div><h2>WebTech Practice</h2></div>

            <div className="btns">  
                <button onClick={() => handleScroll("about")}>About</button>  
                <button onClick={() => handleScroll("services")}>Services</button>
                <button onClick={handleTheme}>Theme</button>
                <button>Login</button>
                <button>SignUp</button>
            </div>
        </div>
    );
};

export default Navbar;
