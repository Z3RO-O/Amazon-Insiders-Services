import { MessageCircle, Send, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="text-center mb-4">
          <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://t.me/Insideamz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Send className="w-5 h-5" />
              <span>Telegram</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="weixin://dl/chat?team-reviwer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition-colors duration-200"
            >
              <Smartphone className="w-5 h-5" />
              <span>WeChat</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>Copyright © 2025 AMZ Insiders Services For Amazon Seller</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
