import React, { useState, useEffect } from "react";
import {
    Link
} from "react-router-dom";
import Header from "./Header";


const UserProfile = () => {

    const [username, setUsername] = useState({
        user: []
    })
    const handleSubmit = (e) => {

        e.preventDefault();
        const data = { username };
        fetch(': https://reqres.in/api/users?page=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
    useEffect(() => {
        let user = localStorage.getItem("user")
        console.log(user)
        setUsername({
            user: JSON.parse(user)
        })
    }, [])


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
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>first_name</th>
                            <td >
                                <input name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                            </td>
                            <td>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </>
    )
}
export default UserProfile;