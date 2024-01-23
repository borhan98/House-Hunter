import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";


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
    }
])