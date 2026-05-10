import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NavLinks from "./constants/NavLinks.js";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col h-screen items-end">
      {/* NAVIGATION */}
      <div className="w-full mx-auto h-fit">
        <Navbar links={NavLinks} />
      </div>
      {/* CONTENT */}
      <div className="flex flex-col justify-center w-screen h-full overflow-y-auto scrollbar-hidden overflow-x-hidden">
        <Outlet />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Dashboard;
