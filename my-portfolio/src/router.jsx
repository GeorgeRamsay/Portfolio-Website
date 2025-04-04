import { createBrowserRouter} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import AppLayout from './layouts/appLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },

]);


export default router;