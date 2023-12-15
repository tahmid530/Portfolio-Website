import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Contact/Contact/Contact.jsx';
import Resume from './Layout/Resume.jsx';
import Experience from './Pages/Resume/Experience/Experience.jsx';
import Education from './Pages/Resume/Education/Education.jsx';
import Skills from './Pages/Resume/Skills/Skills.jsx';
import Download from './Pages/Resume/Download/Download.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      // {
      //   path: "/resume",
      //   element: <Home></Home>
      // },
      {
        path: "/projects",
        element: <Home></Home>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: "/resume",
    element: <Resume></Resume>,
    children: [
      {
        path: "experience",
        element: <Experience></Experience>
      },
      {
        path: "education",
        element: <Education></Education>
      },
      {
        path: "skills",
        element: <Skills></Skills>
      },
      {
        path: "download",
        element: <Download></Download>
      },
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
