import MainLayout from "../components/layout/MainLayout";
import {Outlet} from "react-router-dom";

const MainPage = () => {
    return (

        <MainLayout>
            <Outlet />
        </MainLayout>

        )



 };

export default MainPage
