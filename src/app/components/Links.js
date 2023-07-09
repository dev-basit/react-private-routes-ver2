import React from "react";
import { Link } from "react-router-dom";

import { CURRENT_USER } from "../constants/users";
import { navbarItems } from "../constants/routes";
import { hasPermission } from "../constants/validatePermissions";

function Links() {
  return (
    <section className="navbar">
      <section>
        {navbarItems.map((route) => {
          return (
            hasPermission(route.permissions) && (
              <Link to={route.path} className="navbar_item">
                {route.name}
              </Link>
            )
          );
        })}
      </section>

      <section style={{ alignSelf: "flex-end" }}>You are logged in as {CURRENT_USER}</section>
    </section>
  );
}

export default Links;
