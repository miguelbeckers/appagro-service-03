import React from "react";
import { Navigate, Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import User from "./pages/User";
import UserForm from "./pages/UserForm";
import AreaList from "./pages/AreaList";
import Area from "./pages/Area";
import AreaForm from "./pages/AreaForm";

const routes = (logged) => {
  const home = `/user/${logged.username}/areas`
  return logged.id ? <div className="page">
    <Header />
    <div className="content">
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route exect path="/" element={<Navigate to={home} />} />
        <Route path="/login" element={<Navigate to={home} />} />
        <Route path="/signup" element={<Navigate to={home} />} />
        <Route path="/user/:username/areas" element={<AreaList />} />
        <Route path="/area/:area" element={<Area />} />
        <Route path="/area/form" element={<AreaForm />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="/user/:username/form" element={<UserForm />} />
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