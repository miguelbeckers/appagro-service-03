import React from "react";
import { Navigate, Route, Routes } from "react-router";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Login from "./containers/Login";
// import Absences from "./containers/Absences";
import MapPage from "./pages/MapPage";
// import Prototype from "./containers/Prototype";

const routes = (isLoggedIn) => {
    return isLoggedIn ? <div className="page">
        <Header />
        <div className="content">
            <Routes>
                <Route path="*" element={<MapPage />} />
                {/* <Route exect path="/" element={<Navigate to="/map"/>}/>
                <Route path="login" element={<Navigate to="/absences"/>}/>
                <Route path="prototype" element={<Prototype/>}/>
                <Route path="absences" element={<Absences/>}/>
                <Route path="*" element={<PageNotFound/>}/> */}
            </Routes>
        </div>
        <Footer />
    </div> : <Routes>
        {/* <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Navigate to="/login"/>}/> */}
    </Routes>;
};

export default routes;