
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { X, Menu, Calendar, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DemoDialog } from "./DemoDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { toast } = useToast();

  const handleDemoClick = () => {
    setIsDemoOpen(true);
  };

  const handleScheduleDemo = () => {
    setIsDemoOpen(true);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-caller-dark/80 backdrop-blur-md py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold gradient-text">Mass Caller</h1>
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
            <Button
              variant="outline"
              className="border-caller-blue text-caller-blue hover:bg-caller-blue/10 dark:border-caller-purple dark:text-gray-200"
              onClick={handleDemoClick}
            >
              <Calendar className="w-4 h-4 mr-1" />
              Schedule Demo
            </Button>
            <Button className="button-primary">Get Started</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-caller-dark top-16 shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-2 
                    bg-white/30 dark:bg-gray-900/40 
                    backdrop-blur-md 
                    border border-white/20 dark:border-gray-800/50 
                    rounded-xl 
                    shadow-lg
                    bg-gradient-to-br from-white/40 to-white/80 
                    dark:from-gray-800/40 dark:to-blue-900/50">
            <a
              href="#features"
              className="text-lg font-medium text-gray-800 dark:text-gray-100 w-full py-3 text-center bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-lg font-medium text-gray-800 dark:text-gray-100 w-full py-3 text-center bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-lg font-medium text-gray-800 dark:text-gray-100 w-full py-3 text-center bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Button
              className="button-primary w-full flex items-center justify-center"
              onClick={() => { setIsMenuOpen(false); handleDemoClick(); }}
            >
              Start Demo Call
            </Button>
            <Button
              variant="outline"
              className="w-full border-2 border-caller-blue dark:border-caller-purple text-caller-blue dark:text-white flex items-center justify-center gap-2"
              onClick={() => { setIsMenuOpen(false); handleScheduleDemo(); }}
            >
              <Calendar className="w-4 h-4" />
              Schedule Demo
            </Button>
            <Button
              variant="outline"
              className="w-full border-2 border-gray-300 dark:border-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}

      {/* Demo Dialog */}
      <DemoDialog open={isDemoOpen} onOpenChange={setIsDemoOpen} />
    </header>
  );
};

export default Header;
