import { Outlet } from "react-router-dom";
import { Nav } from "./nav";

export const Layout = () => {
    return (<>
        <Nav />
        <main>
            <Outlet />

        </main>
    </>


    );

}


