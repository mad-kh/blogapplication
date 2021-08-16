//import './App.css';
import TopBar from "./Components/TopBar/TopBar";
import Home from "./pages/Home/Home";
// import { useDispatch ,useSelector} from "react-redux"
//import { useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/Setting/Setting";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
//import { getUsers } from './utiles';
// import {addUser, getUser} from "./redux/actions/usersAction"
// import usersReducer from "./redux/reducers/usersReducer"
function App() {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <Router>
            <TopBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route path="/posts">
                    <Home />
                </Route>
                <Route path="/register">{user ? <Home /> : <Register />}</Route>
                <Route path="/login">{user ? <Home /> : <Login />}</Route>
                <Route path="/post/:id">
                    {user ? <Single /> : <Register />}
                </Route>
                <Route path="/write">{user ? <Write /> : <Login />}</Route>
                <Route path="/settings">{user ? <Setting /> : <Login />}</Route>
            </Switch>
        </Router>
    );
}

export default App;
