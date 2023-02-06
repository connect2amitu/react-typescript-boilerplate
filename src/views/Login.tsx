import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../context";

const Login = () => {
  const { isLoggedIn, setLoginUser } = useAppState("auth");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  return (
    <div>
      <h1> Login </h1>
      <button onClick={setLoginUser}>Login User</button>
    </div>
  )
}

export default Login