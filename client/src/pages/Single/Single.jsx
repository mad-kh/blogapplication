import React from 'react'
import SinglePost from '../../Components/SinglePost/SinglePost'
import SideBar from "../../Components/SideBar/SideBar"
function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <SideBar/>
        </div>
    )
}

export default Single
