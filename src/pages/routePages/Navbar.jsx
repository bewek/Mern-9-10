import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "#000",
    backgroundColor: isActive ? "blue" : "transparent",
    padding: "8px 14px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: isActive ? "600" : "400",
    transition: "all 0.2s ease",
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        background: "lightBlue",
      }}
    >
      <Link to={"/"} style={{ fontSize: "24px", fontWeight: "bold" }}>
        Logo
      </Link>

      <ul
        style={{
          display: "flex",
          columnGap: "10px",
          listStyle: "none",
        }}
      >
        <li>
          <NavLink to={"/"} style={navLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} style={navLinkStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/login"} style={navLinkStyle}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
