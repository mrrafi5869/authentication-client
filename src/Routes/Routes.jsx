import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Loginl/Login";
import SignUp from "../components/SignUp/SignUp";
import Success from "../components/Success/Success";
import Verification from "../components/Verification/Verification";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Login></Login>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },
            {
                path: "/verification",
                element: <Verification></Verification>
            },
            {
                path: "/success",
                element: <Success></Success>
            }
        ]
    }
]);

export default router;