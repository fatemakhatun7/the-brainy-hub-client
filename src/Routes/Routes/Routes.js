import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://the-brainy-hub-server.vercel.app/')
    }
])