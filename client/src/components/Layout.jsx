import { Link, NavLink } from "react-router-dom";
import image_logo from "../assets/image_logo.png"

function Layout() {
    return (
        <div>
            <h1>My Portfolio</h1>
            <nav className="navbar">
                <Link to="/">
                    <img src={image_logo} alt="Logo" className="logo" />
                </Link>
                <Link to="/">
                    <i className="fas fa-home"></i> Home
                </Link>
                <Link to="/about">
                    <i className="fa-solid fa-circle-info"></i> About
                </Link>
                <Link to="/projects">
                    <i className="fas fa-project-diagram"></i> Projects
                </Link>
                <Link to="/services">Services</Link>
                <Link to="/references">Refereces</Link>
                <Link to="/users/signup">Sign Up</Link>
                <li className="nav-item dropdown">
                    <Link className='nav-link dropdown-toggle' to="#" role="button" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-barcode"></i> Admin
                    </Link>
                    <ul className="dropdown-menu">
                        <li>
                            <NavLink className="dropdown-item" to="/admin/projects">
                                <i className="fa-regular fa-rectangle-list"></i> Project List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="dropdown-item" to="/admin/projects/add">
                                <i className="fa-solid fa-square-plus"></i> Add a new Item
                            </NavLink>
                        </li>
                    </ul>
                </li >
            </nav>
        </div>
    )
}

export default Layout;