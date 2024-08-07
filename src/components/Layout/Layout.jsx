import React from "react";
import MainContent from "../MainContent/MainContent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  console.log(location);

  const hideHeaderAndFooter = ["/loginPage", "/registerPage"].includes(
    location.pathname
  );

  return (
    <div className="clientLayout">
      {!hideHeaderAndFooter && <Header />}
      <MainContent>{children}</MainContent>
      {!hideHeaderAndFooter && <Footer />}
    </div>
  );
}

export default Layout;
