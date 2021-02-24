import React from "react";
import UserList from "./UserList";
import UserProfile from "./UserProfile";

const Body = () => {
    return (
        <>
            <h1>Page title</h1>
            <div className="row">
                <div className="col">
                    <UserList />
                </div>
                <div className="col">
                    <UserProfile />
                </div>
            </div>
        </>
    )
}
export default Body;