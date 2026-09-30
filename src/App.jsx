import { Route, Routes } from "react-router";
import Home from "./pages/routePages/Home";
import About from "./pages/routePages/About";
import Login from "./pages/routePages/Login";
import Navbar from "./pages/routePages/Navbar";
import AboutTitle from "./pages/nestedRoute/AboutTitle";
import AboutContent from "./pages/nestedRoute/AboutContent";
import AboutDetails from "./pages/nestedRoute/AboutDetails";
import UserList from "./pages/user/UserList";
import UserDetails from "./pages/user/UserDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id/:name" element={<UserDetails />} />
        </Route>

        <Route path="/about" element={<About />}>
          <Route index element={<AboutTitle />} />
          <Route path="content" element={<AboutContent />} />
          <Route path="details" element={<AboutDetails />} />
        </Route>

        <Route path="/*" element={<h1>Page Not FOund</h1>} />
      </Routes>
    </>
  );
};

export default App;
