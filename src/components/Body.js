import React from "react";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import {
    Switch,
    Route
  } from "react-router-dom";
import About from "./About";

const Body = () => {
    return (
        <>
          <Switch>
            <Route path="/home/userProfile" component={UserProfile} />
            <Route path="/home/usersList" component={UserList} />
            <Route path="/About">
              <About />
            </Route>
            <Route path="/">
              <UserList />
            </Route>
          </Switch>
        </>
    )
}
export default Body;