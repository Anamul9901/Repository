import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Root from "../layout/Root";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/Home/SignUp/SignUp";
import Dashboard from "../page/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    },
]);

export default router;