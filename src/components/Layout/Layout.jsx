import React from "react";
import MainContent from "../MainContent/MainContent";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <MainContent>{children}</MainContent>
    </div>
  );
}

export default Layout;
