import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heading } from "@contentstack/venus-components";

const Header: React.FC = () => {
  const headerData: any = useSelector((state: any) => state.main.headerData);
  const { website_title, logo, navigation_links } = headerData;
  return (
    <div className="header">
      <div className="logo">
        <img src={logo.url} alt="Logo" />
        <Heading text={website_title} tagName="h2" />
      </div>
      <nav className="nav">
        {navigation_links?.link.map((link: any, index: Number) => (
          <Link key={`key-${index}`} to={link.href}>
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
