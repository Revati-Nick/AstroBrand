import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button"; // Adjust path if needed

const Navbar = ({ t, className = "" }) => {
  const location = useLocation();

  return (
    <nav className={`flex flex-col md:flex-row items-center gap-8 ${className}`}>
      <Link
        to="/about"
        className={`text-sm font-medium transition-colors hover:text-gray-300 ${
          location.pathname === "/about" ? "text-primary" : "text-white"
        }`}
      >
        {t.about}
      </Link>
      <Link
        to="/brand"
        className={`text-sm font-medium transition-colors hover:text-gray-300 ${
          location.pathname === "/brand" ? "text-primary" : "text-white"
        }`}
      >
        {t.brand}
      </Link>
      <Link
        to="/consultations"
        className={`text-sm font-medium transition-colors hover:text-gray-300 ${
          location.pathname === "/consultations" ? "text-primary" : "text-white"
        }`}
      >
        {t.consultations}
      </Link>
      <Button
        variant="outline"
        size="sm"
        className="border-white text-white hover:bg-white hover:text-black"
        asChild
      >
        <Link to="/test">{t.test}</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
