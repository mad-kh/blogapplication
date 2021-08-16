import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./TopBar.css";
import { useState } from "react";
import { logOut } from "../../utiles";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/actions/usersAction";
// import {deleteUser} from "../../redux/actions/usersAction"
export default function TopBar() {
    // const user= useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch();
    const PF = "http://localhost:5000/images/";
    const user = JSON.parse(localStorage.getItem("user"));
    const photo = localStorage.getItem("photo");
    const history = useHistory();
    const handlelogOut = async () => {
        try {
            await logOut();
            window.location.replace("/");
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        dispatch(getUser());
        // eslint-disable-next-line
    }, []);
    const USER = useSelector((state) => state.usersReducer.users);
    console.log(USER);
    // const [search, setSearch] = useState(false);
    // const [userSearch, setUserSearch] = useState("");
    // const handleSearch = () => {
    //     setSearch(!search);
    // };
    // const getUserSearch = (e) => {
    //     setUserSearch(e.target.value);
    // };
    //  const getPostSearch = (e) => {
    //      setPostSearch(e.target.value);
    //  };
    return (
        <div className="top">
            <Link to="/" className="navbar-logo" className="Link">
                TABA3'NI...
                <i className="fas fa-feather-alt"></i>
            </Link>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <Link className="link" to="about">
                        <li className="topListItem">ABOUT</li>
                    </Link>
                    <Link className="link" to="contact">
                        <li className="topListItem">CONTACT</li>
                    </Link>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>

                    <li className="topListItem" onClick={handlelogOut}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img className="topImg" src={PF + photo} alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}

                <i
                    className="topSearchIcon fas fa-search"
                    // onClick={handleSearch}
                ></i>
            </div>
        </div>
    );
}
