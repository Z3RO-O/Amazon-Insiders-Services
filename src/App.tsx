import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PaymentCard from '@/components/common/PaymentCard';
import GoToTop from '@/components/common/GoToTop';
import Home from '@/pages/Home';
import Services from '@/pages/Services';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <PaymentCard />
        <Footer />
        <GoToTop />
      </div>
    </Router>
  );
};

export default App;
