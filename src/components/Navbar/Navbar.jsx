import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import WhoCanUse from "../../pages/whoCanUse/WhoCanUse";
// import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col ">
        <header className="bg-white-300 text-black py-4 px-6 flex items-center justify-between">
          <Link className="flex items-center gap-2 " to={"/"}>
            <span className="text-xl font-bold ">Wellness Hub </span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link to={"/diet-programs"} className="hover:text-blue-500">
              Diet Programs
            </Link>
            <Link to={"/subscription"} className="hover:text-blue-500">
              Subscriptions
            </Link>
            <Link to={"/service"} className="hover:text-blue-500">
              Services
            </Link>
            <Link to={"/contact"} className="hover:text-blue-500">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/appointment")}
              text={"Book Appointment"}
            />
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
