import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import ServicePrice from "../pages/service-price/page";
import Contact from "../pages/contact/page";
import PrivacyPolicy from "../pages/privacy/page";

import BabysitterPage from "../pages/babysitter/page";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service-price",
    element: <ServicePrice />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/babysitter",
    element: < BabysitterPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;