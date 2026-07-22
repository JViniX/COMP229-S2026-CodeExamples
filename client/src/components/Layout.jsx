import { Link, NavLink, useLocation } from "react-router-dom";
import image_logo from "../assets/image_logo.png"
import { isAuthenticated, getUsername, clearSession } from "./auth/auth-helper";

function Layout() {

    const location = useLocation();

    const signOutClick = () => {
        console.log("==== test =====")
        clearSession();
    }

    return (
        <div>
            <h1>My Portfolio</h1>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
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
                    {!isAuthenticated() &&
                        <Link to="/users/signin">Sign In</Link>
                    }
                    {isAuthenticated() &&
                        <Link to="/" onClick={signOutClick}>Sign-out ({getUsername()})</Link>
                    }
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
                    
                </div>
            </nav>

        </div>
    )
}

export default Layout;