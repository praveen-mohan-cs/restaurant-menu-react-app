import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Menu from "../components/menu/Menu";
import { getEntry } from "../api";
import { CONTENT_TYPES } from "../constants";
import { useDispatch } from "react-redux";
import {
  setBreakfastData,
  setDinnerData,
  setFooterData,
  setHeaderData,
  setLunchData,
} from "../reducer";
import LoadingScreen from "../components/LoadingScreen";

const AppRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const fetchHeaderData = async () => {
    const data = await getEntry(CONTENT_TYPES.HEADER);
    dispatch(setHeaderData(data[0][0]));
  };
  const fetchFooterData = async () => {
    const data = await getEntry(CONTENT_TYPES.FOOTER);
    dispatch(setFooterData(data[0][0]));
  };
  const fetchBreakfastData = async () => {
    const data = await getEntry(CONTENT_TYPES.BREAKFAST);
    dispatch(setBreakfastData(data[0]));
  };
  const fetchLunchData = async () => {
    const data = await getEntry(CONTENT_TYPES.LUNCH);
    dispatch(setLunchData(data[0]));
  };
  const fetchDinnerData = async () => {
    const data = await getEntry(CONTENT_TYPES.DINNER);
    dispatch(setDinnerData(data[0]));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          fetchHeaderData(),
          fetchFooterData(),
          fetchBreakfastData(),
          fetchLunchData(),
          fetchDinnerData(),
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Router>
      <div className="app">
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
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
          </>
        )}
      </div>
    </Router>
  );
};

export default AppRoutes;
