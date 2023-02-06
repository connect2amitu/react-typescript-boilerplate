import { Navigate, useRoutes } from 'react-router-dom';
import { useAppState } from './context';
import About from './views/About';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import SecuredPage from './views/SecuredPage';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/secured-page',
      element: <PrivateRoute>
        <SecuredPage />
      </PrivateRoute>
    },
    {
      path: 'about',
      element: <About />,
      children: [
        {
          path: '',
          element: <div>About Index</div>
        },
        {
          path: ':id',
          element: <div>About us Details</div>
        }]
    }
  ]);
  return routes;
}

export const PrivateRoute = ({ children, }: { children: any }) => {
  const { isLoggedIn } = useAppState("auth");

  return isLoggedIn ? children : <Navigate to="/login" />;
}


export default Routing;