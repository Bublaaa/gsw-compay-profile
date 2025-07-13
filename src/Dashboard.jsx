import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NavLinks from "./constants/NavLinks.js";
const Dashboard = () => {
  return (
    <div className="w-full flex flex-col h-screen items-end">
      {/* NAVIGATION */}
      <div className="w-full mx-auto h-fit">
        <Navbar links={NavLinks} />
      </div>
      {/* CONTENT */}
      <div className="flex justify-center items-end w-full h-full overflow-y-auto scrollbar-hidden pb-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
