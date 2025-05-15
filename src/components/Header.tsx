
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-caller-dark/80 backdrop-blur-md py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold gradient-text">Instant Reach Caller</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-caller-blue dark:text-gray-200 dark:hover:text-caller-purple font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-caller-blue dark:text-gray-200 dark:hover:text-caller-purple font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-caller-blue dark:text-gray-200 dark:hover:text-caller-purple font-medium">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button className="button-primary">Get Started</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-caller-dark pt-20">
          <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-6">
            <a 
              href="#features" 
              className="text-lg font-medium text-gray-800 dark:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-lg font-medium text-gray-800 dark:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-lg font-medium text-gray-800 dark:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Button className="button-primary w-full" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
