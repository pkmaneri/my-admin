import React, { useState, useEffect } from "react";

const UserList = () => {
    const [state, setState] = useState({
        users: []
    })
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
                            <>
                                <tr key={i}>
                                    <th scope="col">{user.first_name}</th>
                                    <th scope="col">{user.last_name}</th>
                                    <th scope="col">{user.email}</th>
                                </tr>

                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default UserList;