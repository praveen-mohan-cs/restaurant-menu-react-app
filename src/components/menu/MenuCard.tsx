import { AssetCardVertical } from "@contentstack/venus-components";
import React from "react";
// COMMENT: Uncomment below import statement
// import { TDishes } from "../../types";

// COMMENT: Replace any[] with TDishes[]
const MenuCard: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="menu-card">
      {data ? (
        // COMMENT: Replace any with TDishes
        data.map((menuItem: any) => (
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
