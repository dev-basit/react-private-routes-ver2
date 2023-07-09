import React from "react";
import { Link } from "react-router-dom";

import { CURRENT_USER } from "./constants/users";

function Links() {
  return (
    <section className="navbar">
      <section>
        <Link to={"/"} className="navbar_item">
          Home
        </Link>
        <Link to={"/user"} className="navbar_item">
          User
        </Link>
        <Link to={"/user-profile"} className="navbar_item">
          User Profile
        </Link>
        <Link to={"/admin"} className="navbar_item">
          Admin
        </Link>
      </section>

      <section style={{ alignSelf: "flex-end" }}>You are logged in as {CURRENT_USER}</section>
    </section>
  );
}

export default Links;
