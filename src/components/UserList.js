import React, { useState, useEffect } from "react";
import {
    Link,
    useHistory
} from "react-router-dom";
import Header from "./Header";

const UserList = () => {
    const history = useHistory();

    const [state, setState] = useState({
        users: []
    })

    const navigateToUserProfile = (user) => {
       
        localStorage.setItem('user', JSON.stringify(user));        
        history.push("/home/userProfile");

        console.log(user);
    }

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
            .then(res => res.json())
            .then(res => {
                setState({
                    users: res.data
                })
            })
    }, [])


    console.log(state)
    return (

        <>
            <Header />
            <h1>Page title</h1>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/home/userList">UserList</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home/userProfile">UserProfile</Link>
                </li>

            </ul>

            <table className="table">
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {state.users.map((user, i) => {
                        return (
                            <tr key={i} onClick={navigateToUserProfile.bind(this,user)}>
                                <th scope="col">{user.first_name}</th>
                                <th scope="col">{user.last_name}</th>
                                <th scope="col">{user.email}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default UserList;