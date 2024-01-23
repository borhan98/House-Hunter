import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layouts/Dashboard";
import AddHouse from "../DashboardPages/AddHouse/AddHouse";
import MyHouses from "../DashboardPages/MyHouses/MyHouses";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    },
    {
        path: "signin",
        element: <SignIn />
    },
    {
        path: "register",
        element: <SignUp />
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "myHouses",
                element: <MyHouses />
            },
            {
                path: "addHouse",
                element: <AddHouse />
            }
        ]
    }
])