import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();

    const login =(event) => {
        event.preventDefault();
        console.log(" event ", event)
        let email = event.target.form.email.value;
        let password = event.target.form.password.value;
        console.log(" email password ", email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                console.log(" userCredentials ", userCredentials) 
                navigate("/home");
            })
            .catch(err => { console.log(" err ", err)})
    }

    return (
        <section className="register-form">
            <h2>Friends Chat</h2>
            <form className="register-form">
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button onClick={login}>Login</button>
            </form>
            <div>You don't have an account? <Link to="/register">Register</Link></div>
        </section>
    )
}

export default Login;