import Home from "../components/Home";
import User from "../components/User";
import Profile from "../components/Profile";
import Admin from "../components/Admin";
import Error from "../components/Error";
import { USER_TYPES } from "./users";

export const navbarItems = [
  {
    name: "Home",
    path: "/",
    permissions: [USER_TYPES.publicUser, USER_TYPES.normalUser, USER_TYPES.adminUser],
  },
  {
    name: "User",
    path: "/user",
    permissions: [USER_TYPES.normalUser, USER_TYPES.adminUser],
  },
  {
    name: "Profile",
    path: "/user-profile",
    permissions: [USER_TYPES.normalUser, USER_TYPES.adminUser],
  },
  {
    name: "Admin",
    path: "/admin",
    permissions: [USER_TYPES.adminUser],
  },
];

export const links = [
  {
    path: "/",
    component: Home,
    permissions: [USER_TYPES.publicUser, USER_TYPES.normalUser, USER_TYPES.adminUser],
    others: { exact: true },
  },
  {
    path: "/user",
    component: User,
    permissions: [USER_TYPES.normalUser, USER_TYPES.adminUser],
  },
  {
    path: "/user-profile",
    component: Profile,
    permissions: [USER_TYPES.normalUser, USER_TYPES.adminUser],
  },
  {
    path: "/admin",
    component: Admin,
    permissions: [USER_TYPES.adminUser],
  },
  {
    path: "*",
    component: Error,
    permissions: [USER_TYPES.publicUser, USER_TYPES.normalUser, USER_TYPES.adminUser],
  },
];
