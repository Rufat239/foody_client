import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import Restaurant_Main from "./pages/Restaurant_Main";
import Internal from "./components/Restaurant/Internal";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurantMain" element={<Restaurant_Main />} />
          <Route path='/internal'  element={<Internal/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
