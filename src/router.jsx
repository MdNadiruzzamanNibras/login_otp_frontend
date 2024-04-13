import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Page/Home";
import SignUp from "./Page/SignUP";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
