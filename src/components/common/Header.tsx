import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, Mail, MessageCircle, Menu, X, ShoppingCart, DollarSign, Settings, BookOpen } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-black py-3 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Clock className="w-4 h-4" />
                <span>8:00AM - 6:00PM Mon-Sat</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>support@sellamzacc.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4 animate-pulse" />
                <span className="font-medium">Online 24x7 telegram: @agedamzaccount</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Button variant="ghost" asChild className="p-0 hover:bg-transparent">
            <Link to="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors duration-200">
              sellamzacc.com
            </Link>
          </Button>
          
          <nav className="hidden lg:flex space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/buy-account" className="flex items-center gap-2 group">
                <ShoppingCart className="w-4 h-4 group-hover:animate-bounce" />
                Buy Amazon Seller Account
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/sell-account" className="flex items-center gap-2 group">
                <DollarSign className="w-4 h-4 group-hover:animate-bounce" />
                Sell Amazon Seller Account
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/services" className="flex items-center gap-2 group">
                <Settings className="w-4 h-4 group-hover:animate-spin" />
                Amazon Service
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/blog" className="flex items-center gap-2 group">
                <BookOpen className="w-4 h-4 group-hover:animate-pulse" />
                Amz blog
              </Link>
            </Button>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              className="hidden md:flex bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Contact us
              </Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 animate-fadeIn">
            <nav className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" asChild className="justify-start">
                <Link 
                  to="/buy-account"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy Amazon Seller Account
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link 
                  to="/sell-account"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <DollarSign className="w-4 h-4" />
                  Sell Amazon Seller Account
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link 
                  to="/services"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Settings className="w-4 h-4" />
                  Amazon Service
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link 
                  to="/blog"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BookOpen className="w-4 h-4" />
                  Amz blog
                </Link>
              </Button>
              <Button 
                className="mt-2 bg-black text-white hover:bg-gray-800"
                asChild
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact us
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
