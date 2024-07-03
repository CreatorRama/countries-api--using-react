import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./app";
import Contact from "./components/contact";
import Home from "./components/home";
import Error from "./components/error";
import Countrydetails from "./components/Countrydetails";
import leftarrow from '/assets/left-arrow.png'
import './country.css'



const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path: "/",
      element: <Home />,
        },
        {
          path: "/contact/",
      element: <Contact />,
        },
        {
          path: "/:country",
      element: <Countrydetails imageurl={leftarrow} />,
        },
        {
          path: "*",
      element: <Error />
        },      
      ]
    },
   
  ]);

const root=createRoot(document.querySelector("#root"))

root.render(<RouterProvider router={router} />)
