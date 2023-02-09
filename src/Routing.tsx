import { Navigate, useRoutes } from 'react-router-dom';

import { useAppState } from './context';

// Pages
import About from './views/About';
import Dashboard from './views/Home';
import Login from './views/Login';
import SecuredPage from './views/SecuredPage';
import UnAuthorizedAccess from './views/UnAuthorizedAccess';

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
      path: 'unauthorized',
      element: <UnAuthorizedAccess />,
    },
    {
      path: 'about',
      element: <About />,
    }
  ]);

  return routes;
}

export const PrivateRoute = ({ children, }: { children: any }) => {
  const { isLoggedIn } = useAppState("auth");

  return isLoggedIn ? children : <Navigate to="/unauthorized" />;
}


export default Routing;