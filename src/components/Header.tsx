import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Heading } from "@contentstack/venus-components";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const headerData: any = useSelector((state: any) => state.main.headerData);
  const { title } = headerData;
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://images.contentstack.io/v3/assets/blt6f19dec108148cb9/blt1b581368727d5a3f/65e98f0d0395e454222852be/spicy_hub_512.png"
          alt="Logo"
        />
        <Heading text={title} tagName="h2" />
      </div>
      <nav className="nav">
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/menu")}>Menu</a>
        <a onClick={() => navigate("/about-us")}>About us</a>
        <a onClick={() => navigate("/contact")}>Contact</a>
      </nav>
    </div>
  );
};

export default Header;
