import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Menu from "../components/menu/Menu";
import { getEntry, getEntryByUrl } from "../api";
import { CONTENT_TYPES } from "../constants";
import { useDispatch } from "react-redux";
import {
  setFooterData,
  setHeaderData,
  setHomePageData,
  setMenuPageData,
} from "../reducer";
import LoadingScreen from "../components/LoadingScreen";
import { NotFound } from "../components/NotFound";

const AppRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchHeaderData = useCallback(async () => {
    const data = await getEntry(CONTENT_TYPES.HEADER);
    dispatch(setHeaderData(data[0][0]));
  }, [dispatch]);

  const fetchFooterData = useCallback(async () => {
    const data = await getEntry(CONTENT_TYPES.FOOTER);
    dispatch(setFooterData(data[0][0]));
  }, [dispatch]);

  const fetchHomePageData = useCallback(async () => {
    const data: any = await getEntryByUrl({
      contentTypeUid: CONTENT_TYPES.PAGE,
      entryUrl: "/",
      referenceFieldPath: undefined,
      jsonRtePath: undefined,
    });
    dispatch(setHomePageData(data[0]));
  }, [dispatch]);

  // const fetchMenuPageData = useCallback(async () => {
  //   const data: any = await getEntryByUrl({
  //     contentTypeUid: CONTENT_TYPES.PAGE,
  //     entryUrl: "/menu",
  //     referenceFieldPath: ["sections.menu.course.dishes"],
  //     jsonRtePath: undefined,
  //   });
  //   dispatch(setMenuPageData(data[0].sections[0].menu.course));
  // }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          fetchHeaderData(),
          fetchFooterData(),
          fetchHomePageData(),
          // fetchMenuPageData(),
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // Add fetchMenuPageData to the below dependency array when using it
  }, [fetchFooterData, fetchHeaderData, fetchHomePageData]);
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
                <Route path="/menu" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
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
