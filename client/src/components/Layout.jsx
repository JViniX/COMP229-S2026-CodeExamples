import { Link } from "react-router-dom";
import image_logo from "../assets/image_logo.png"

function Layout() {
    return (
        <div>
            <h1>My Portfolio</h1>
            <nav className="navbar">
                <Link to="/">
                    <img src={image_logo} alt="Logo" className="logo" />
                </Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/references">Refereces</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Layout;