import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Heading } from "@contentstack/venus-components";
import { RootState } from "../../store";
import { TLink } from "../../types";

const Header: React.FC = () => {
  const headerData = useSelector((state: RootState) => state.main.headerData);
  const { website_title, logo, navigation_links } = headerData;
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`header ${isOpen ? "open" : ""}`}>
      <div className="logo-menu">
        <Link to="/">
          {/* TODO: Undo the below change */}
          {/* <img src={logo?.url} alt="Logo" /> */}
          <img
            src={
              "https://images.contentstack.io/v3/assets/bltb07d61d76cca54b3/blt4fcb7a4d8b0d4f81/667d25ddee05f336b82fea3b/Logo_with_name_to_the_left.png"
            }
            alt="Logo"
          />
        </Link>

        {/* <Heading className="heading" text={website_title} tagName="h6" /> */}
      </div>
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        {navigation_links?.link.map((link: TLink, index: number) => (
          <Link
            key={`key-${index}`}
            to={link.href}
            className={location.pathname === link.href ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="menu-toggle" onClick={handleToggleMenu}>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </div>
    </div>
  );
};

export default Header;
