import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ReqruitmentProcess from "../Pages/reqruitmentProcess/rReqruitmentProcess";
import GlobalRecruitment from "../Pages/Services/GlobalRecruitment/GlobalRecruitment";
import ImmigrationVisa from "../Pages/Services/ImmigrationVisa/ImmigrationVisa";
import AirTicket from "../Pages/Services/AirTicket/AirTicket";
import OutSourcingPayroll from "../Pages/Services/OutSourcingPayroll/OutSourcingPayroll";
import SDCOverseas from "../Pages/Services/SDC-Overseas/SDCOverseas";

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
        },
        {
          path: '/globalRecruitment',
          element: <GlobalRecruitment></GlobalRecruitment>
        },
        {
          path: '/immigrationVisa',
          element: <ImmigrationVisa></ImmigrationVisa>
        },
        {
          path: '/airTicket',
          element: <AirTicket></AirTicket>
        },
        {
          path: '/outSourcing',
          element: <OutSourcingPayroll></OutSourcingPayroll>
        },
        {
          path: '/sdcoverseas',
          element: <SDCOverseas></SDCOverseas>
        }
      ]
    },
  ]);

  export default router;