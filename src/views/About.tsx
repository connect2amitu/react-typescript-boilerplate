import { NavLink, Outlet } from "react-router-dom";
import { useAppState } from "../context";

const About = () => {
  const { isLoggedIn, setLoginUser, logout } = useAppState("auth");

  return (
    <div>
      <h1>About us</h1>
      {isLoggedIn ?
        <button onClick={logout}>Logout</button>
        :
        <button onClick={setLoginUser}>Set Login User</button>
      }

      <div>This is the About us page</div>
      <NavLink to="/about">First Page</NavLink>&nbsp;&nbsp;
      <NavLink to="/about/1">Detail</NavLink>
      <h1>Page Content</h1>
      <Outlet />
    </div>
  )
}

export default About