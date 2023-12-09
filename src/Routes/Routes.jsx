import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ReqruitmentProcess from "../Pages/reqruitmentProcess/rReqruitmentProcess";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/reqruitmentprocess',
          element: <ReqruitmentProcess></ReqruitmentProcess>
        }
      ]
    },
  ]);

  export default router;