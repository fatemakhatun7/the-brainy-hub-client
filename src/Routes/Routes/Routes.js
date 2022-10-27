import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Checkout from "../../Pages/courses/Checkout";
import Courses from "../../Pages/courses/Courses";
import CoursesDetails from "../../Pages/courses/CoursesDetails";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/others/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://the-brainy-hub-server.vercel.app/')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/profile',
                element: <Profile></Profile>
            },
            {
                path:'/courses',
                element: <PrivateRoute><Courses></Courses></PrivateRoute>,
                loader: () => fetch('https://the-brainy-hub-server.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><CoursesDetails></CoursesDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-brainy-hub-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/courses/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-brainy-hub-server.vercel.app/courses/${params.id}`)
            }
        ] 
    }
])