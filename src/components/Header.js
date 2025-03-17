import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

const Header = () => {
  const [locale, setLocale] = useState("ru");
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const location = useLocation();

  // Translations
  const translations = { en, ru };
  const t = translations[locale];

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ru" : "en");
  };

  return (
    <header className="w-full border-b bg-[#131314] text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Brand Name (30%) */}
        <div className="flex items-center gap-2 w-1/3">
          <Moon className="h-6 w-6" />
          <span className="text-lg font-bold">AstroSite</span>
        </div>

        {/* Navbar Component (Desktop) */}
        <div className="hidden md:flex w-1/2 justify-center">
          <Navbar t={t} />
        </div>

        {/* Language Toggle & Mobile Menu Button (Remaining 20%) */}
        <div className="flex items-center w-1/3 justify-end gap-4">
          <Button variant="ghost" size="icon" onClick={toggleLocale} className="rounded-full">
            {locale === "en" ? "RU" : "EN"}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-white text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navbar (Hidden by default, shown when menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#131314] shadow-md p-4 flex flex-col items-center gap-4">
          <Navbar t={t} />
        </div>
      )}
    </header>
  );
};

export default Header;
