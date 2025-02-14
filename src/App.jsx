import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicketSelect from "./pages/TicketSelect";
import UserDetails from "./pages/UserDetails";
import Ticket from "./pages/Ticket";
import AppLayout from "./pages/AppLayout";
import About from "./pages/About";

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
          },
          {
            path: "/about",
            element: <About />,
          },
        ],
      },
    ],
    {
      future: {
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
  return <RouterProvider router={router} />;
}
