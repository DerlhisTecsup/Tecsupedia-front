import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - wiki
const HomePage = Loadable(lazy(() => import('pages/wiki/HomePage')));

// ==============================|| WIKI ROUTING ||============================== //

const LoadingRouters = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/wiki',
      element: <HomePage />
    }
  ]
};

export default LoadingRouters;
