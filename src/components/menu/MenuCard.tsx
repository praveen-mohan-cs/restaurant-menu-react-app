import { AssetCardVertical } from "@contentstack/venus-components";
import React from "react";
import { TDishes } from "../../types";

const MenuCard: React.FC<{ data: TDishes[] }> = ({ data }) => {
  return (
    <div className="menu-card">
      {data ? (
        data.map((menuItem: TDishes) => (
          <AssetCardVertical
            key={menuItem.uid}
            assetType="image"
            assetUrl={menuItem.image.url}
            title={menuItem.title}
            version="v1"
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenuCard;
