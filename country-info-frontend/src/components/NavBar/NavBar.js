import "./NavBar.css"

const NavBar = (props) => {
    return ( 
        <div className="navbar shadow">
            <span className="navbar-title">Where in the world?</span>
            <span className="navbar-button"><i className="fa fa-moon-o" id="navbar-icon"></i>Dark Mode</span>
        </div>
    );
}
 
export default NavBar;