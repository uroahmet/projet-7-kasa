import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const router = createBrowserRouter([
        {
          path: "/",
          element: (
            <>
                <Navbar />
                <App />
                <Footer />
            </>
          ),
          errorElement: <h1>404 not found</h1>
        },
        {
            path: "/flat",
            element: (
                <>
                <Navbar />
                <h1>Appartements</h1>
                <Footer />
                </>
            )
        },
        {
            path: "/about",               
            element: (
                <>
                <Navbar />
                <h1>A propos</h1>
                <Footer />
                </>
            )
        },
])