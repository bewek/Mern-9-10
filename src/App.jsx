import { Route, Routes } from "react-router";
import Home from "./pages/routePages/Home";
import About from "./pages/routePages/About";
import Login from "./pages/routePages/Login";
import Navbar from "./pages/routePages/Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<h1>Page Not FOund</h1>} />
      </Routes>
    </>
  );
};

export default App;
