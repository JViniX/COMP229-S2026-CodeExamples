import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react"
import MyModal from "../MyModal";
import UserModel from "../../datasource/userModel";
import { authenticate } from "./auth-helper";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Signin() {

    const { state } = useLocation();
    const { from } = state || { from: { pathname: '/' } };

    let navigate = useNavigate();
    let [user, setUser] = useState({
        email: '',
        password: ''
    });
    let [errorMsg, setErrorMsg] = useState('')
    let [isUploading, setIsUploading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Cancels the default action of the form submission (page reload)  
        setErrorMsg("");

        setIsUploading(true);
        await signInWithEmailAndPassword(auth, user.email, user.password)
            .then(userCredential => {
                console.log(userCredential);
                const userFb = userCredential.user;

                authenticate(userFb, () => {
                    navigate(from, { replace: true });
                });

            }).catch(err => {
                setErrorMsg(err.message);
                console.log(err)
            }).finally(() => {
                setIsUploading(false);
            });
    }

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();

        setIsUploading(true);
        await signInWithPopup(auth, provider)
            .then((userCredential) => {
                const userFB = userCredential.user;
                // console.log(userFB);
                authenticate(userFB, () => {
                    navigate(from, { replace: true });
                });
            })
            .catch((error) => {
                setErrorMsg(error.message);
                console.log(error);
            }).finally(() => {
                setIsUploading(false);
            });
    };

    return (
        // -- Content for the Add user page --
        <div className="container" style={{ paddingTop: 80 }}>
            {isUploading &&
                <MyModal message="Signing in user..." />
            }
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
                        &nbsp;
                        <br />
                        <br />
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="btn btn-danger"
                        >
                            <i className="fab fa-google"></i> Sign in with Google
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Signin;