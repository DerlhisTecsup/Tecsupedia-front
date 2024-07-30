import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));


const Student = Loadable(lazy(() => import('pages/student/redact')));
const Areas = Loadable(lazy(() => import('pages/student/areas')));
const Perfil = Loadable(lazy(() => import('pages/student/perfil')));
// render - sample page
const Areas_docente = Loadable(lazy(() => import('pages/teacher/areas_docente')));
const Perfil_docente = Loadable(lazy(() => import('pages/teacher/areas_docente')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'edit',
      element: <Student />
    },
    {
      path: 'areas',
      element: <Areas />
    },
    {
      path: 'perfil',
      element: <Perfil />
    },
 
  // ==============================|| MAIN ROUTING --docentes ||============================== //

  {
    path: 'areas_docente',
    element: <Areas_docente />
  },
  {
    path: 'perfil_docente',
    element: <Perfil_docente />
  },
  {
    path: 'glosario',
    element: <Glosario />
  },
  
  // ==============================|| MAIN ROUTING --Visitantes ||============================== //

  

 ]
};

export default MainRoutes;
