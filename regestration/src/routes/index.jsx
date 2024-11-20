import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Menu from "../Pages/Menu";
import TeacherList from "../Pages/TeacherList";
import StudentList from "../Pages/StudentList";
import StudentRegister from "../Pages/StudentRegister";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/techerList",
          element: <TeacherList />,
        },
        {
          path: "/studentRegister",
          element: <StudentRegister />,
        },
        {
          path: "/studentList",
          element: <StudentList />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
