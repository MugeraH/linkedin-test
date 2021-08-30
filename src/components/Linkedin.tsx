import React from "react";
import logo from "../assets/linkedin.png";

function Linkedin() {
  return (
    <div className="link">
      <img src={logo} alt="linkedin logo" />

      <a
                href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=657575&scope=r_liteprofile%20r_emailaddress%20w_member_social&client_id=774up8xbssfyp5&redirect_uri=
        http://linkedin-test-app.vercel.app/home"
//         href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=657575&scope=r_liteprofile%20r_emailaddress%20w_member_social&client_id=774up8xbssfyp5&redirect_uri=
// http://localhost:3000/home"
      >
        Linkedin
      </a>
    </div>
  );
}

export default Linkedin;
