import React from "react";

const Profile=()=>{
    const auth = localStorage.getItem('user');
    return(
        <div className="" >
            <h3>Logged in User :({JSON.parse(auth).name})</h3>
        </div>
    )
}
export default Profile;