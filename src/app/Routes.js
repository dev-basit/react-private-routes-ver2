import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { CURRENT_USER, USER_TYPES } from "./constants/";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <ValidatePublicComponents>
            <Home />
          </ValidatePublicComponents>
        }
      />
      <Route
        path="/user"
        element={
          <ValidateUserComponents>
            <User />
          </ValidateUserComponents>
        }
      />
      <Route
        path="/user-profile"
        element={
          <ValidateUserComponents>
            <UserProfile />
          </ValidateUserComponents>
        }
      />
      <Route
        path="/admin"
        element={
          <ValidateAdminComponents>
            <Admin />
          </ValidateAdminComponents>
        }
      />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default AppRoutes;

function Home() {
  return <div>Home Page</div>;
}

function User() {
  return <div>User Page</div>;
}

function UserProfile() {
  return <div>User Profile Page</div>;
}

function Admin() {
  return <div>Admin Page</div>;
}

function ValidatePublicComponents({ children }) {
  return children;
}

function ValidateUserComponents({ children }) {
  if (CURRENT_USER === USER_TYPES.normalUser || CURRENT_USER === USER_TYPES.adminUser) return children;

  return <>{alert("permission not available, you cannot acces this page, \n logging out now")}</>;

  // you can also navigate to home screen
  // <Navigate to={"/"} />;
}

function ValidateAdminComponents({ children }) {
  if (CURRENT_USER === USER_TYPES.adminUser) return children;

  return <>{alert("permission not available, you cannot acces this page, \n logging out now")}</>;

  // you can also navigate to home screen
  // <Navigate to={"/"} />;
}
