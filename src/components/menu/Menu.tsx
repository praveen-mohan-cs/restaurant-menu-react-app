import { Tabs } from "@contentstack/venus-components";
import React from "react";
import MenuCard from "./MenuCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TMenu } from "../../types";

const Menu: React.FC = () => {
  const menuPageData = useSelector(
    (state: RootState) => state.main.menuPageData
  );

  const tabData = menuPageData?.map((course: TMenu, index: number) => ({
    componentData: <MenuCard data={course.dishes} />,
    id: `index-${index}`,
    title: course.course_name,
  }));

  return (
    <div className="menu-page">
      {tabData && (
        <Tabs shouldHaveBorder={true} tabInfo={tabData} version="v1" />
      )}
    </div>
  );
};

export default Menu;
