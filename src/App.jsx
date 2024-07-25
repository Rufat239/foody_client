import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import Restaurant_Main from "./pages/Restaurant_Main";
import Internal from "./components/Restaurant/Internal";
import AboutPage from "./pages/AboutPage";
import HowPage from "./pages/HowPage";
import FaqPage from "./pages/FaqPage";
import YourBasketPage from "./pages/YourBasketPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurantMain" element={<Restaurant_Main />} />
          <Route path="/internal" element={<Internal />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/howItWorks" element={<HowPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/yourBasketPage" element={<YourBasketPage />} />
          <Route path="/ordersPage" element={<OrdersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
