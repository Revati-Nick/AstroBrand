"use client"

import React from 'react';
import { useState } from "react"
import { Link, useLocation } from "react-router-dom" // Update import statement
import { Button } from "../components/ui/button"
import { Moon, Sun } from "lucide-react"

const Header = () => {
  const [locale, setLocale] = useState("ru")
  const location = useLocation() // Update to useLocation

  // Translations
  const translations = {
    en: {
      about: "About Me",
      brand: "Astro Brand",
      consultations: "Consultations",
      test: "Test",
    },
    ru: {
      about: "Обо мне",
      brand: "Астро Бренд",
      consultations: "Консультации",
      test: "Тест",
    },
  }

  const t = translations[locale]

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ru" : "en")
  }

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Moon className="h-6 w-6" />
          <span className="text-lg font-bold">AstroSite</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/about" // Update to use "to" instead of "href"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t.about}
          </Link>
          <Link
            to="/brand" // Update to use "to" instead of "href"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/brand" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t.brand}
          </Link>
          <Link
            to="/consultations" // Update to use "to" instead of "href"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/consultations" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t.consultations}
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="transition-colors hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link to="/test">{t.test}</Link> {/* Update to use "to" instead of "href" */}
          </Button>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleLocale} className="rounded-full">
            {locale === "en" ? "RU" : "EN"}
          </Button>

          {/* Mobile menu button - you can expand this to create a mobile menu */}
          <Button variant="outline" size="icon" className="md:hidden">
            <Sun className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
};

export default Header;

