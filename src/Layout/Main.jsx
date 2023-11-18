import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import TopNavBar from "../Shared/NavBar/TopNavBar";


const Main = () => {
    return (
        <div className="">
            <TopNavBar></TopNavBar>
           <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;