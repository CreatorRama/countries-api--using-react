import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Contact from "./components/contact";
import Home from "./components/home";
import Error from "./components/error";
import Countrydetails from "./components/Countrydetails";
import leftarrow from './assets/left-arrow.png'; // Adjusted path for asset import
import './country.css';

const basename = '/countries-api--using-react'; // Replace with your GitHub repository name

const routes = [
  {
    path: "/", // This should render Home component when path is "/"
    element: <Home />,
  },
  {
    path: "/contact", // This should render Contact component when path is "/contact"
    element: <Contact />,
  },
  {
    path: "/:country", // Dynamic route parameter for country
    element: <Countrydetails imageurl={leftarrow} />, // Render Countrydetails with passed props
  },
  {
    path: "*", // Catch-all route for any other paths not matched
    element: <Error />,
  },
];
console.log(routes);
const router = createBrowserRouter({
  basename: basename,
  routes: routes,
});

const root = createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
