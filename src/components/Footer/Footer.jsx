import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white-300 py-8 text-gray-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="mb-8 md:mb-0">
            <h3 className="mb-4 text-lg font-bold text-gray-800">About Us</h3>
            <p>
              Wellness Hub is a comprehensive health and wellness platform
              dedicated to helping individuals achieve their health and fitness
              goals.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="mb-4 text-lg font-bold text-gray-800">
              Quick Links
            </h3>
            <nav className="space-y-2 ">
              <Link className="hover:text-blue-500  mr-3" to={"/"}>
                Home
              </Link>
              <Link className="hover:text-blue-500 mr-3" to={"/service"}>
                Services
              </Link>
              <Link className="hover:text-blue-500 mr-3" to={"/subscription"}>
                Pricing
              </Link>
              <Link className="hover:text-blue-500 mr-3" to={"/contact"}>
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-800">Contact Us</h3>
            <p>
              Email: info@wellnesshub.com
              <br />
              Phone: 9822883593
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 Wellness Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
