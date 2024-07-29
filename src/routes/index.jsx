import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import LoadingRoutes from './LoadingRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([MainRoutes, LoginRoutes, LoadingRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;
