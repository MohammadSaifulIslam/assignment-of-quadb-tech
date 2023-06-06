import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar />
            <ScrollRestoration />
            <Outlet />
        </div>
    );
};

export default Main;