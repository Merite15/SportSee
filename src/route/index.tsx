import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Profile } from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/user/:id",
        element: <Profile />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);