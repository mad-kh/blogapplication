import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
// import { useDispatch } from "react-redux";
//import {addUser} from "../../redux/actions/usersAction"
import { loginUser } from "../../utiles/index";

function Login() {
    const [loginData, setLoginData] = useState({});
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    //const dispatch = useDispatch()
    // const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/auth/login", loginData)
            .then((response) => {
                loginUser(response.data.data);
                localStorage.setItem("photo", response.data.data.profilePic);
                window.location.replace("/");
            })
            .catch((err) => {
                alert(err.response.data.msg);
            });
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Username</label>
                <input
                    className="loginInput"
                    type="text"
                    name="username"
                    placeholder="Enter your name..."
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    name="password"
                    placeholder="Enter your password..."
                    onChange={handleChange}
                />
                <button className="loginButton" onClick={handleSubmit}>
                    Login
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link className="Linkcolor" to="/register">
                    Register
                </Link>
            </button>
        </div>
    );
}

export default Login;
