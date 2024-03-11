import { Tabs } from "@contentstack/venus-components";
import React, { useEffect } from "react";
import MenuCard from "./MenuCard";
import { getEntry } from "../../api";
import { CONTENT_TYPES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setBreakfastData, setDinnerData, setLunchData } from "../../reducer";

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const breakfastData: any = useSelector(
    (state: any) => state.main.breakfastData
  );
  const lunchData: any = useSelector((state: any) => state.main.lunchData);
  const dinnerData: any = useSelector((state: any) => state.main.dinnerData);
  useEffect(() => {
    getEntry(CONTENT_TYPES.BREAKFAST).then((data: any) => {
      dispatch(setBreakfastData(data[0]));
    });
  }, []);
  useEffect(() => {
    getEntry(CONTENT_TYPES.LUNCH).then((data: any) => {
      dispatch(setLunchData(data[0]));
    });
  }, []);
  useEffect(() => {
    getEntry(CONTENT_TYPES.DINNER).then((data: any) => {
      dispatch(setDinnerData(data[0]));
    });
  }, []);
  return (
    <div className="menu-page">
      <Tabs
        shouldHaveBorder={true}
        tabInfo={[
          {
            componentData: <MenuCard data={breakfastData} />,
            id: "breakfast",
            title: "Breakfast",
          },
          {
            componentData: <MenuCard data={lunchData} />,
            id: "component",
            title: "Lunch",
          },
          {
            componentData: <MenuCard data={dinnerData} />,
            id: "component",
            title: "Dinner",
          },
        ]}
        version="v1"
      />
    </div>
  );
};

export default Menu;
