import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, MessageCircle, Menu, X, ShoppingCart, Settings, Send, Smartphone, CreditCard } from 'lucide-react';
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
                <span>24/7 Support Available</span>
              </div>
              <a
                href="https://t.me/Insideamz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
              <a
                href="https://wa.me/+18658880593"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="weixin://dl/chat?team-reviwer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                <Smartphone className="w-4 h-4" />
                <span>WeChat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Button variant="ghost" asChild className="p-0 hover:bg-transparent">
            <Link to="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors duration-200">
              AMZ Insiders Services
            </Link>
          </Button>
          
          <nav className="hidden lg:flex space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2 group">
                <ShoppingCart className="w-4 h-4 group-hover:animate-bounce" />
                Services & Accounts
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/services" className="flex items-center gap-2 group">
                <Settings className="w-4 h-4 group-hover:animate-spin" />
                Service Examples
              </Link>
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                // Smooth scroll to payment card section
                const paymentCard = document.querySelector('[data-payment-card]');
                if (paymentCard) {
                  paymentCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  // Fallback: scroll to bottom where payment card is located
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 group"
            >
              <CreditCard className="w-4 h-4 group-hover:animate-pulse" />
              Payment Mode
            </Button>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button
              className="hidden md:flex bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://wa.me/+18658880593" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Contact us
              </a>
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
                  to="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Services & Accounts
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link
                  to="/services"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Settings className="w-4 h-4" />
                  Service Examples
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => {
                  // Smooth scroll to payment card section
                  const paymentCard = document.querySelector('[data-payment-card]');
                  if (paymentCard) {
                    paymentCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    // Fallback: scroll to bottom where payment card is located
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Payment Mode
                </div>
              </Button>
              <Button
                className="mt-2 bg-black text-white hover:bg-gray-800"
                asChild
              >
                <a href="https://wa.me/+18658880593" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact us
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
