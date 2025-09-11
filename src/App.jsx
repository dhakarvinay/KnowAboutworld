import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./component/layout/AppLayout";

import "./app.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";

import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./component/layout/CountryDetails";





const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
       {
        path: "country",
        element: <Country />
      },
      {
        path: "contact",
        element: <Contact />
      },
     {
      path:"country/:id",
      element:<CountryDetails/>
     }


    ]
  }
])

const app = () => {
  return <RouterProvider router={router} />;
}
export default app;