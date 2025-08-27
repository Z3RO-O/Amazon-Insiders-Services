import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AMZ Insiders Services</h3>
            <div className="space-y-2 text-gray-300">
              <p>Live Chat Support</p>
              <p className="text-sm">24/7 online chat</p>
              <p>Send Ticket</p>
              <p className="text-sm">Left your message</p>
              <p>Guarantee</p>
              <p className="text-sm">Buy without risk</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div>
                <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-gray-300 hover:text-white font-normal">
                  <Link to="/">Home</Link>
                </Button>
              </div>
              <div>
                <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-gray-300 hover:text-white font-normal">
                  <Link to="/contact">Contact us</Link>
                </Button>
              </div>
              <div>
                <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-gray-300 hover:text-white font-normal">
                  <Link to="/services">Amazon Service</Link>
                </Button>
              </div>
              {/* Hide blog button for now */}
              {/* <div>
                <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-gray-300 hover:text-white font-normal">
                  <Link to="/blog">Amz blog</Link>
                </Button>
              </div> */}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Opening Hours</p>
              <p className="text-sm">Monday-Friday: 09:00-22:00</p>
              <p>Our Location</p>
              <p className="text-sm">3649 Lafayette Rd, IN</p>
              <p>Booking Now</p>
              <p className="text-sm">support@amzinsiders.com</p>
            </div>
          </div>
          
          {/* Stats */}
          <div>
            <h4 className="font-semibold mb-4">Our Stats</h4>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="text-2xl font-bold text-white">1073</p>
                <p className="text-sm">Account Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">926</p>
                <p className="text-sm">Trusted Clients</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 AMZ Insiders Services For Amazon Seller</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
