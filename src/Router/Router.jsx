import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import React, { lazy } from "react";
import BlogFrom from "../component/Blogs/BlogFrom";

// Lazy load components
const About = lazy(() => import("../component/About/About"));
const Portfolio = lazy(() => import("../component/Portfolio/Portfolio"));
const Contact = lazy(() => import("../component/Contact/Contact"));
const Home = lazy(() => import("../component/Home/Home"));
const Details = lazy(() => import("../component/Portfolio/details/Details"));
const Services = lazy(() => import("../component/services/Services"));
const Blogs = lazy(() => import("../component/Blogs/Blogs"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
         path:"/blogFrom",
         element:<BlogFrom />
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
