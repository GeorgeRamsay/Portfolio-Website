import { createBrowserRouter} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import AppLayout from './layouts/appLayout';
import ProjectPage from './pages/projectPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,

    },
    {
        path: 'projects/:projectname',
        element: <ProjectPage />, 
    },

]);


export default router;