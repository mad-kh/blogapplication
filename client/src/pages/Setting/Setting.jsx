import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Setting.css";
//import SideBar from "../../Components/SideBar/SideBar";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
// import { UpdateUser } from "../../redux/actions/usersAction";
// import { deleteUser } from "../../utiles";

export default function Settings() {
    // const [Update, setUpdate] = useState({});
    // const handleChange = (e) => {
    //     setUpdate({ ...Update, [e.target.name]: e.target.value });
    // };
    const PF = "http://localhost:5000/images/";
    const user = JSON.parse(localStorage.getItem("user"));
    const photo = localStorage.getItem("photo");
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [setting, setSetting] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            // userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            console.log("data", updatedUser.profilePic);
            try {
                await axios.post("/api/upload", data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.put("/api/users/" + user._id, updatedUser);
            setSuccess(true);
            localStorage.setItem("photo", updatedUser.profilePic);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };
    const handleDelete = async () => {
        JSON.parse(localStorage.clear("user"));
        window.location.replace("/");
    };
    const handleSetting = () => {
        setSetting(!setting);
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user.profilePic);
    }, [user]);
    return (
        <div className="settings">
            <i class="fas fa-user-cog write" onClick={handleSetting}></i>
            {setting ? (
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">
                            Update Your Account
                        </span>
                        <Button
                            variant="outline-danger"
                            className="settingsDeleteTitle"
                            onClick={handleDelete}
                        >
                            LOGOUT
                        </Button>
                    </div>
                    <form className="settingsForm" onSubmit={handleSubmit}>
                        <label className="writep ">Profile Picture</label>
                        <div className="settingsPP">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : PF + photo
                                }
                                alt={user.username}
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon far fa-user-circle"></i>
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: "none" }}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <label className="writep ">Username</label>
                        <input
                            defaultValue={user.username}
                            type="text"
                            placeholder={user.username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="writep ">Email</label>
                        <input
                            defaultValue={user.email}
                            type="email"
                            placeholder={user.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="writep ">Password</label>
                        <input
                            defaultValue={user.password}
                            type="password"
                            placeholder="password...."
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="settingsSubmit" type="submit">
                            Update
                        </button>
                        {success && (
                            <span
                                style={{
                                    color: "green",
                                    textAlign: "center",
                                    marginTop: "20px",
                                }}
                            >
                                Profile updated...
                            </span>
                        )}
                    </form>
                </div>
            ) : (
                <p className="writep ">Setting your account</p>
            )}
        </div>
    );
}
