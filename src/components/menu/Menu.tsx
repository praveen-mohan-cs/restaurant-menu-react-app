import { Tabs } from "@contentstack/venus-components";
import React from "react";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const breakfastData: any = useSelector(
    (state: any) => state.main.breakfastData
  );
  const lunchData: any = useSelector((state: any) => state.main.lunchData);
  const dinnerData: any = useSelector((state: any) => state.main.dinnerData);
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
