import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicketSelect from "./components/TicketSelect";
import UserDetails from "./components/UserDetails";
import Ticket from "./components/Ticket";
import AppLayout from "./components/AppLayout";


export default function App() {
  const router = createBrowserRouter(
    [
      {
        // layout route that doesnt need path. since it doesnt have a path, its called a layout route
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <TicketSelect />,
          },
          // error msg here cos of more data fetching here and to keep teh layout when error occurs
          {
            path: "/details",
            element: <UserDetails />,
          },
          {
            path: "/ticket",
            element: <Ticket />,
          }
        ],
      },
    ],
    {
      future: {
        v7_skipActionErrorRevalidation: true,
      },
    },
  );
  return  <RouterProvider router={router} />;

}