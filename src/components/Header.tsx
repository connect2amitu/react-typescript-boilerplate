import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
      <NavLink to="/about">About</NavLink>
      <NavLink to="/secured-page">Secured Page</NavLink>
    </div>
  )
}
