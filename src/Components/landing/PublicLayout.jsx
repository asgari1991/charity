import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import MainContents from "./MainContents";

// Layout for all public landing routes. The root ("/") shows
// the main landing content (Landing + MainContents). Other
// child routes render inside the Outlet between Header/Footer.
const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

// Convenience component for the home (index) route
export const LandingHome = () => (
  <>
    <Landing />
    <MainContents />
  </>
);

export default PublicLayout;


