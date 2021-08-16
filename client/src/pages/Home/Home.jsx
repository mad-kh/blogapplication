import React from "react";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";
import Footer from "../../Components/Footer/Footer";
// import {postReducer} from '../../redux/reducers/postReducer'
// import axios from "axios";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postsActions";
import { useLocation } from "react-router";

function Home() {
    const { search } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        // eslint-disable-next-line
        dispatch(fetchPosts(search));
    }, [search]);
    const posts = useSelector((state) => state.postReducer.posts);
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const res = await axios.get("/api/posts" + search);
    //         console.log(res);
    //         setPosts(res.data);
    //     };
    //     fetchPosts();
    // }, []);
    return (
        <div>
            <Header />
            <SideBar />
            <div className="home">
                <Posts posts={posts} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
