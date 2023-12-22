import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Root from "../layout/Root";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/Home/SignUp/SignUp";
import Useful from "../page/Useful/Useful";
import Dashboard from "../layout/Dashboard";
import HomeDashboard from "../page/Dashboard/HomeDashboard/HomeDashboard";
import CreateTask from "../page/Dashboard/CreateTask/CreateTask";
import MyTask from "../page/Dashboard/MyTask/MyTask";
import UpdateTask from "../page/UpdateTask/UpdateTask";
import ErrorPage from "../page/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
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
            },
            {
                path: '/useful',
                element: <Useful />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <HomeDashboard />
            },
            {
                path: 'create-task',
                element: <CreateTask />
            },
            {
                path: 'my-task',
                element: <MyTask />
            },
            {
                path: 'update-task/:id',
                element: <UpdateTask />,
                loader: ({ params }) => fetch(`https://job-task-server-sandy-pi.vercel.app/tasks/${params.id}`)
            }
        ]
    }
]);

export default router;