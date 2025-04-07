import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>

            {/* Dynamic Section */}
             <div className="min-h-[calc(100vh-232px)] py-6">
             <Outlet></Outlet>
             </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;