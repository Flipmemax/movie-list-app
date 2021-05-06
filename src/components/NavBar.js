import { NavLink } from "react-router-dom";
import "./CSS/NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBarStyle">
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "gray" }}
        style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        to="/"
        exact
      >
        Home
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "gray" }}
        style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        to="/about"
      >
        About
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "gray" }}
        style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        to="/discover"
      >
        Discover
      </NavLink>
    </div>
  );
}
