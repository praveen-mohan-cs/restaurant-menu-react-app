import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFooterData } from "../reducer/index";
import { getEntry } from "../api";
import { CONTENT_TYPES } from "../constants";
import { Heading } from "@contentstack/venus-components";

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const footerData: any = useSelector((state: any) => state.main.footerData);
  const { title } = footerData;
  useEffect(() => {
    getEntry(CONTENT_TYPES.FOOTER).then((data) => {
      dispatch(setFooterData(data[0][0]));
    });
  }, []);
  return (
    <div className="footer">
      <Heading text={`© 2024 ${title}`} tagName="h2" />
    </div>
  );
};

export default Footer;
