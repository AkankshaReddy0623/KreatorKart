import { useState } from "react";
import { Button } from "./ui/button";
import { Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-slate-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-foreground">KreatorKart</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#for-creators" className="text-muted-foreground hover:text-foreground transition-colors">
              For Creators
            </a>
            <a href="#for-brands" className="text-muted-foreground hover:text-foreground transition-colors">
              For Brands
            </a>
            <a href="#campaigns" className="text-muted-foreground hover:text-foreground transition-colors">
              Campaigns
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="bg-white border border-border text-primary hover:bg-accent"
              onClick={() => navigate('/wallet')}
            >
              <Wallet className="w-4 h-4 mr-2" />
              Wallet
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Log In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#for-creators" className="text-muted-foreground hover:text-foreground transition-colors">
                For Creators
              </a>
              <a href="#for-brands" className="text-muted-foreground hover:text-foreground transition-colors">
                For Brands
              </a>
              <a href="#campaigns" className="text-muted-foreground hover:text-foreground transition-colors">
                Campaigns
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  className="bg-white border border-border text-primary hover:bg-accent justify-start"
                  onClick={() => navigate('/wallet')}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Wallet
                </Button>
                <Button variant="ghost" className="justify-start">
                  Log In
                </Button>
                <Button className="bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
