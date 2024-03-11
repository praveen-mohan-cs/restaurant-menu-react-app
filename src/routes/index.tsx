import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Menu from "../components/menu/Menu";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route
              path="*"
              element={
                <h2
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  404! Page not found
                </h2>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
