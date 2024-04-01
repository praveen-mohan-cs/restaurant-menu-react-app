import React from "react";
import { useSelector } from "react-redux";
import { Heading } from "@contentstack/venus-components";
import { RootState } from "../../store";

const Footer: React.FC = () => {
  const footerData = useSelector((state: RootState) => state.main.footerData);
  const { copyright } = footerData;
  return (
    <div className="footer">
      <Heading text={copyright} tagName="h2" />
    </div>
  );
};

export default Footer;
