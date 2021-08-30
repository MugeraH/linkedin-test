import React from "react";

function Profile() {
  let profile = localStorage.getItem("profile");
  //@ts-ignore
  console.log(JSON.parse(profile));

  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}

export default Profile;
