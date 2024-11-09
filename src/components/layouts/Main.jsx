import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-40">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;