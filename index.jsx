import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Contact from "./components/contact";
import Home from "./components/home";
import ErrorPage from "./components/error"; // Rename Error to ErrorPage to avoid conflicts
import Countrydetails from "./components/Countrydetails";
import leftarrow from './assets/left-arrow.png'; // Adjusted path for asset import
import './country.css';

const basename = '/countries-api--using-react'; // Adjusted basename as needed

const router = createBrowserRouter({
  basename: basename,
  routes: [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: ":country",
          element: <Countrydetails imageurl={leftarrow} />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ],
});

const root = createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
