import { Link, Outlet } from "react-router";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>About Page</h1>

      <Link to={"/"}>Back to Home</Link>

      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        <li>
          <Link to={""}>About Title</Link>
        </li>
        <li>
          <Link to={"content"}>About Content</Link>
        </li>
        <li>
          <Link to={"details"}>About Details</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default About;
