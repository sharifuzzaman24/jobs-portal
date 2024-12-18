import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/auth/Login/LoginPage';
import RegisterPage from './pages/auth/Login/RegisterPage';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './route/PrivateRoute';
import AllJobs from './pages/jobs/allJobs/AllJobs';
import JobDetails from './pages/jobs/JobDetails';
import AddJob from './pages/jobs/AddJob';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/all-jobs",
    element: <PrivateRoute><AllJobs></AllJobs></PrivateRoute>,
  },
  {
    path: "/jobs/details/:id",
    element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
    loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
  },
  {
    path: "/add-job",
    element: <AddJob></AddJob>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
