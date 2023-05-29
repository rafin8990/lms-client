import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import About from "../Pages/About/About";
import Courses from "../Pages/Courses/Courses";
import Collaboration from "../Pages/Colaboration/Collaboration";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <LandingPage></LandingPage>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/courses',
                element: <PrivateRoute><Courses></Courses></PrivateRoute>
            },
            {
                path: '/collaboration',
                element: <Collaboration></Collaboration>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                // loader:({params})=>fetch(`http://localhost:5000/services/${params._id}`)
            }
        ])
    }
])