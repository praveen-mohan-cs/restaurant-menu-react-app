import { AssetCardVertical } from "@contentstack/venus-components";
import React from "react";

const MenuCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="menu-card">
      {data ? (
        data.map((menuItem: any) => (
          <AssetCardVertical
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
