import React from "react";
import MainContent from "../MainContent/MainContent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className="clientLayout">
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
}

export default Layout;
