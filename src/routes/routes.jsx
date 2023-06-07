import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import MyBookings from "../pages/MyBookings/MyBookings";
import ShowDetails from "../pages/ShowDetails/ShowDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/show-details/:id',
        element: <ShowDetails />
      },
      {
        path: 'my-bookings',
        element: <MyBookings />
      }
    ]
  },
]);

export default router;