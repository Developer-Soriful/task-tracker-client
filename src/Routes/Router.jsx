import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Tasks from "../pages/Tasks";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        Component: Tasks,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);
