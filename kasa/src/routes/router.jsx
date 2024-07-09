import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Footer from "../layout/Footer.jsx";
import Navbar from "../components/Navbar";
import Main from "../layout/Main.jsx"
import ApartmentPage from "../pages/ApartmentPage.jsx";

const HeaderFooterLayout = () => {
return <>
    <Navbar />
    <Main>
     <Outlet />
     </Main>
    <Footer />
</>
}

export const router = createBrowserRouter([
        {
          element: <HeaderFooterLayout />,
          errorElement: <h1>404 not found</h1>,
          children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/flat",
                element: <ApartmentPage />
            },
            {
                path: "/about",               
                element: <h1>A propos</h1>
            },
                ]
        }
])