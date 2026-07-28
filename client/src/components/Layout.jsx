import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
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
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          {/* -- Brand/logo -- */}
          <NavLink className="navbar-brand" to="#">
            <img src={image_logo} alt="logo" style={{ width: 40 }} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            {/* !-- Links -- */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  <i className="fas fa-project-diagram"></i> Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <i className="fa-solid fa-circle-info"></i> About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  <i className="fa-solid fa-hand-holding-dollar"></i> Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/references">
                  <i className="fa-solid fa-book"></i> References
                </NavLink>
              </li>

              {!isAuthenticated() &&
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users/signin">
                    <i className="fa-solid fa-right-to-bracket"></i> Sign in
                  </NavLink>
                </li>
              }
              {isAuthenticated() &&

                <li className="nav-item dropdown">
                  <Link className='nav-link dropdown-toggle' to="#" role="button" data-bs-toggle="dropdown">
                    <i className="fa-solid fa-user"></i> {getUsername()}
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
                    <li>
                      <Link className="dropdown-item" to="/" onClick={signOutClick}>
                        <i className="fa-solid fa-right-from-bracket"></i> Sign-out
                      </Link>
                    </li>
                  </ul>
                </li >

              }

            </ul >
          </div>
        </div>
      </nav >
      <div className="container" style={{ paddingTop: 60 }} />
      <Outlet />
    </div >
  )
}

export default Layout;