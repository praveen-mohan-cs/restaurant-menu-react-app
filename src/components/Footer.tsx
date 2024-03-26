import React from "react";
import { useSelector } from "react-redux";
import { Heading } from "@contentstack/venus-components";

const Footer: React.FC = () => {
  const footerData: any = useSelector((state: any) => state.main.footerData);
  const { copyright } = footerData;
  return (
    <div className="footer">
      <Heading text={copyright} tagName="h2" />
    </div>
  );
};

export default Footer;
