import "./style.css";
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = () => {
    const signUp = (event) => {
        event.preventDefault();
        let email = event.target.form.email.value;
        let password = event.target.form.password.value;
        createUserWithEmailAndPassword(auth,email, password)
            .then(userDetails => { console.log(" userDetails ", userDetails)})
        .catch(err=>{console.log("err", err)})
    }
    return (
        <section className="register-form">
            <h2>Friends Chat</h2>
            <form className="register-form">
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="file" name="avatar" />
                <button onClick={signUp}>Sign up</button>
            </form>
            <p>You do have an account?<Link to="/">Login</Link></p>
        </section>
    )
}

export default Register;