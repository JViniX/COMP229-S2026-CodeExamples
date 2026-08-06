import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import MyModal from "../MyModal";
import { create } from "../../datasource/api-users";
import UserModel from "../../datasource/userModel";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Signup() {

    let navigate = useNavigate();
    let [user, setUser] = useState(new UserModel());
    let [errorMsg, setErrorMsg] = useState('');
    let [isUploading, setIsUploading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Cancels the default action of the form submission (page reload)  
        setErrorMsg("");
        if (user.password !== document.getElementById('confirmPasswordTextField').value) {
            setErrorMsg("ERROR: Passwords don't match!");
        } else {
            try {
                setIsUploading(true);
                let userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
                console.log(userCredential);

                let userFb = userCredential.user;

                await updateProfile(userFb, {
                    displayName: user.firstname + " " + user.lastname
                });

                let res = await create(userFb); // Creates the user in the backend.
                if (res && res.success) {
                    alert(res.message);
                    navigate("/users/signin");
                }
                else {
                    setErrorMsg(res.message);
                }
            } catch (error) {
                setErrorMsg(err.message);
                console.log(err)
            } finally {
                setIsUploading(false);
            }
        }
    }

    return (
        // -- Content for the Add user page --
        <div className="container" style={{ paddingTop: 80 }}>
            {isUploading &&
                <MyModal message="Creating user..." />
            }
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add a new user</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="firstnameTextField">First Name</label>
                            <input type="text" className="form-control"
                                id="firstnameTextField"
                                placeholder="Enter first name"
                                name="firstname"
                                value={user.firstname || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="lastnameTextField">Last name</label>
                            <input type="text" className="form-control"
                                id="lastnameTextField"
                                placeholder="Enter last name"
                                name="lastname"
                                value={user.lastname || ''}
                                onChange={handleChange}>
                            </input>
                        </div>
                        <br />

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
                        <div className="form-group">
                            <label htmlFor="confirmPasswordTextField">Confirm Password</label>
                            <input type="password" className="form-control"
                                id="confirmPasswordTextField"
                                placeholder="Confirm password">
                            </input>
                        </div>
                        <br />

                        <br />

                        <button className="btn btn-primary" type="submit">
                            <i className="fas fa-edit"></i>
                            Submit
                        </button>
                        &nbsp; &nbsp;
                        <Link href="#" to="/users/signin" className="btn btn-warning">
                            <i className="fas fa-undo"></i>
                            Cancel
                        </Link>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Signup;