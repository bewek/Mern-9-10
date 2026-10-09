import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items);

  console.log(cartCount.length);
  console.log(cartCount);

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
    <>
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
          <li>
            <NavLink to={"/users"} style={navLinkStyle}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "45px",
                height: "40px",
                textDecoration: "none",
                fontSize: "26px",
                color: "#000",
              }}
            >
              🛒
              {/* Count */}
              <span
                style={{
                  position: "absolute",
                  top: "-2px",
                  right: "-2px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  minWidth: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cartCount.length}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
