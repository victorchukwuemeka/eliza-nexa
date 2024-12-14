//import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Auth from "./components/Auth";
import UserPreferences from "./components/UserPreferences";
import ContentCalendar from "./components/ContentCalendar";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: "/preferences",
        element: <UserPreferences onSavePreferences={(prefs) => console.log(prefs)} />,
    },
    {
        path: "/calendar",
        element: <ContentCalendar schedule={[]} />, // Replace with actual schedule data
    },
    {
        path: "*", // Catch-all route for undefined paths
        element: <NotFound />,
    },
]);
