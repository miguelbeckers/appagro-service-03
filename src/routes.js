import React from "react";
import { Navigate, Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import MapPage from "./pages/MapPage";
import User from "./pages/User";

const routes = (isLogged) => {
  return isLogged ? <div className="page">
    <Header />
    <div className="content">
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route exect path="/" element={<Navigate to="/map" />} />
        <Route path="login" element={<Navigate to="/map" />} />
        <Route path="signup" element={<Navigate to="/map" />} />
        <Route path="/user" element={<User />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
    <Footer />
  </div> : <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>;
};

export default routes;