import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects/Projects";
import Contacts from "../Pages/Contact/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

    ]
  },

  {
    path: 'about',
    element: <About></About>
  },
  {
    path: 'Projects',
    element: <Projects></Projects>
  },
  {
    path: 'contact',
    element: <Contacts></Contacts>

  }

]);