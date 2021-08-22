import "./NavBar.css"

function changeToDarkMode() {
    let newMode = getComputedStyle(document.documentElement).getPropertyValue('--text-color') == "white" ? "darkMode" : "lightMode"
    let newTextColor = newMode == "darkMode" ? "white" : "var(--very-dark-blue)"
    let newBgColor = newMode == "darkMode" ? "var(--very-dark-blue)" : "var(--very-light-gray)"
    let newElementColor = newMode == "darkMode" ? "var(--dark-blue)" : "white"
    document.documentElement.style
    .setProperty('--text-color', newTextColor);
    document.documentElement.style
    .setProperty('--background-color', newBgColor);
    document.documentElement.style
    .setProperty('--element-color', newElementColor);
}

const NavBar = (props) => {
    return ( 
        <div className="navbar shadow">
            <span className="navbar-title">Where in the world?</span>
            <span className="navbar-button" onClick={() => {changeToDarkMode()} }><i className="fa fa-moon-o" id="navbar-icon"></i>Dark Mode</span>
        </div>
    );
}
 
export default NavBar;