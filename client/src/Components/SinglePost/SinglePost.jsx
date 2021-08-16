import React from "react";
import "./SinglePost.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {
//     deletePost,
//     fetchPosts,
//     UpdatePosts,
// } from "../../redux/actions/postsActions";
export default function SinglePost() {
    const user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    const PF = "http://localhost:5000/images/";
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [newPost, setNewPost] = useState({});
    const [updateMode, setUpdateMode] = useState(false);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const getPost = async () => {
    //         await dispatch(fetchPosts(path));
    //     };
    //     getPost();
    // }, [path]);
    // const post = useSelector((state) => state.postReducer.posts);
    // console.log("post._id", post._id);
    // const handleUpdatePost = async () => {
    //     try {
    //         await dispatch(
    //             UpdatePosts({
    //                 id: post._id,
    //                 post: post.username,
    //                 username: user.username,
    //                 newPost,
    //             })
    //         );
    //         // window.location.reload();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    const handleUpdate = () => {
        setUpdateMode(!updateMode);
    };
    const handleChange = (e) => {
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/api/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);
    const handleDelete = async () => {
        try {
            await axios.delete(`/api/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) {
            console.log(err);
        }
    };
    console.log(post, "lkjhgf");
    const handleUpdatePost = async () => {
        try {
            await axios.put(`/api/posts/${post._id}`, {
                username: user.username,
                title: newPost.title,
                desc: newPost.desc,
                category: newPost.categories,
            });
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        src={PF + post.photo}
                        alt=""
                        className="singlePostImg"
                    />
                )}
                {updateMode ? (
                    <input
                        name="title"
                        type="text"
                        Value={post.title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={handleChange}
                    />
                ) : (
                    <h1 className="singlePostTitle">
                        {post.title}
                        {post.username === user.username && (
                            <div className="singlePostEdit">
                                <i
                                    className="singlePostIcon far fa-edit"
                                    onClick={handleUpdate}
                                ></i>
                                <i
                                    className="singlePostIcon far fa-trash-alt"
                                    onClick={handleDelete}
                                ></i>
                            </div>
                        )}
                    </h1>
                )}
                {updateMode ? (
                    <input
                        name="categories"
                        type="text"
                        Value={post.categories}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={handleChange}
                    />
                ) : (
                    <p className="singlePostDesc">{post.categories}</p>
                )}

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        <p>
                            Author:
                            <Link
                                to={`/?user=${post.username}`}
                                className="link"
                            >
                                <b> {post.username} </b>
                            </Link>
                        </p>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea
                        name="desc"
                        type="text"
                        Value={post.desc}
                        className="singlePostDescInput"
                        autoFocus
                        onChange={handleChange}
                    />
                ) : (
                    <p className="singlePostDesc">{post.desc}</p>
                )}
                {updateMode && (
                    <button
                        className="singlePostButton"
                        onClick={handleUpdatePost}
                    >
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}
