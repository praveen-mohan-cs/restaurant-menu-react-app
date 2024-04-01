import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Heading } from "@contentstack/venus-components";
import { RootState } from "../../store";
import { TLink } from "../../types";

const Header: React.FC = () => {
  const headerData = useSelector((state: RootState) => state.main.headerData);
  const { website_title, logo, navigation_links } = headerData;
  const location = useLocation();
  return (
    <div className="header">
      <div className="logo">
        <img src={logo.url} alt="Logo" />
        <Heading text={website_title} tagName="h2" />
      </div>
      <nav className="nav">
        {navigation_links?.link.map((link: TLink, index: number) => (
          <Link
            key={`key-${index}`}
            to={link.href}
            className={location.pathname === link.href ? "active" : ""}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
