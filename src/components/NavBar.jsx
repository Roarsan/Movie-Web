import '../css/NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/Favorites">Favorite</Link>
            </div>
        </nav>
    );
}

export default NavBar;
