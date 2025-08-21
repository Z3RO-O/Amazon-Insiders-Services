import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Home from '@/pages/Home';
import BuyAccount from '@/pages/BuyAccount';
import SellAccount from '@/pages/SellAccount';
import Services from '@/pages/Services';
import ContactForm from '@/components/specific/ContactForm';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy-account" element={<BuyAccount />} />
            <Route path="/sell-account" element={<SellAccount />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
