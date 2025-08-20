import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';
import BuyAccount from '@/pages/BuyAccount';
import SellAccount from '@/pages/SellAccount';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyAccount />} />
        <Route path="/sell" element={<SellAccount />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
