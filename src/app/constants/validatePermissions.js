import { Navigate } from "react-router-dom";

import { CURRENT_USER } from "./users";

export function PrivateRoutes({ permissions, children }) {
  if (hasPermission(permissions)) return children;

  return (
    <>
      {/* Permission not available, you cannot acces this page, you can also logg out or any other logic */}
      <Navigate to={"/"} />
    </>
  );
}

export function hasPermission(permissions) {
  if (permissions.includes(CURRENT_USER)) return true;

  return false;
}
