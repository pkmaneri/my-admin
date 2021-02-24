import React, { useState } from "react";

const UserProfile = () => {
    const [username, setUsername] = useState("")

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

    return (
        <>
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