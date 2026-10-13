import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items);
  // console.log(cartCount);

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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Fixed Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          background: "lightBlue",
          flexShrink: 0,
        }}
      >
        <Link to="/" style={{ fontSize: "24px", fontWeight: "bold" }}>
          Logo
        </Link>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink to="/" style={navLinkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/test" style={navLinkStyle}>
              Test
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" style={navLinkStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" style={navLinkStyle}>
              Login
            </NavLink>
          </li>

          <li>
            <NavLink to="/users" style={navLinkStyle}>
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
      </header>

      {/* Only Outlet Content Scrolls */}
      <main
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
