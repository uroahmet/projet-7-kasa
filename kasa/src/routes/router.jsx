import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Footer from "../layout/Footer.jsx";
import Navbar from "../components/Navbar";
import Main from "../layout/Main.jsx"
import ApartmentPage from "../pages/ApartmentPage.jsx";
import About from "../pages/About.jsx";
import ErrorPageNotFound from "../pages/ErrorPageNotFound.jsx"

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
          errorElement: <ErrorPageNotFound />,
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
                element: <About />
            },
                ]
        }
])