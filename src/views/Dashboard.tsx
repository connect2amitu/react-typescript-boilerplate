import { useAppState } from "../context"

const Dashboard = () => {
  const { isDarkTheme, toggleTheme } = useAppState("global");
  const { isLoggedIn } = useAppState("auth");

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <p>{isDarkTheme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <br />
        <br />
        <p>{isLoggedIn ? "LoggedIn" : "Not LoggedIn"}</p>
      </div>
    </div>
  )
}

export default Dashboard