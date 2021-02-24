import React, { useState } from "react";

const UserProfile = () => {
    const [username, setUsername] = useState("")

    return (
        <>
            <table class="table">
                <tbody>
                    <tr>
                        <th>first_name</th>
                        <td >
                            <input name="username" value="username" onChange={(e) => setUsername(e.target.value)}></input>
                        </td>
                    </tr>
                </tbody>

            </table>

        </>
    )
}
export default UserProfile;