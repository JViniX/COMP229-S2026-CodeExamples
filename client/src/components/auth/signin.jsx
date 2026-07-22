import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react"
import { signin } from "../../datasource/api-users";
import UserModel from "../../datasource/userModel";
import { authenticate } from "./auth-helper";

function Signin() {

    const { state } = useLocation();
    const { from } = state || { from: {pathname: '/'} };

    let navigate = useNavigate();
    let [user, setUser] = useState({
        email: '',
        password: ''
    });
    let [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Cancels the default action of the form submission (page reload)  
        setErrorMsg("");

        signin(user)
            .then(res => {
                console.log(res);
                if (res && res.success) {
                    authenticate(res.token, ()=>{
                        navigate(from, {replace: true});
                    });
                }
                else {
                    setErrorMsg(res.message);
                }
            }).catch(err => {
                setErrorMsg(err.message);
                console.log(err)
            });
    }

    return (
        // -- Content for the Add user page --
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Sign In</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <form onSubmit={handleSubmit} className="form">

                        <div className="form-group">
                            <label htmlFor="emailTextField">Email</label>
                            <input type="text" className="form-control"
                                id="emailTextField"
                                placeholder="Enter a email"
                                name="email"
                                value={user.email || ''}
                                onChange={handleChange}>
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="passwordTextField">Password</label>
                            <input type="password" className="form-control"
                                id="passwordTextField"
                                placeholder="Enter a password"
                                name="password"
                                value={user.password || ''}
                                onChange={handleChange}>
                            </input>
                        </div>
                        <br />
                        <br />

                        <button className="btn btn-primary" type="submit">
                            <i className="fas fa-edit"></i>
                            Submit
                        </button>
                        &nbsp; &nbsp;
                        <Link href="#" to="/" className="btn btn-warning">
                            <i className="fas fa-undo"></i>
                            Cancel
                        </Link>

                        &nbsp; &nbsp;
                        <Link to="/users/signup" style={{ textDecoration: 'none' }}>
                            <i className="fas fa-user-plus"></i> Sign-up
                        </Link>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Signin;