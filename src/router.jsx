import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Page/Home";
import SignUp from "./Page/SignUP";
import SignIN from "./Page/SignIn";
import ForgetPass from "./Page/ForgetPass";
import NewPassword from "./Page/NewPassword";

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
      {
        path: "/signin",
        element: <SignIN />,
      },
      {
        path: "/forgetPass",
        element: <ForgetPass />,
      },
      {
        path: "/otp",
        element: <NewPassword />,
      },
    ],
  },
]);
