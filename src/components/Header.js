import React from "react";
import styled from "styled-components";
import navbarIcon from "../assets/icon-hamburger.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const showNavbar = () => {
    navigate("/navigation");
  };
  return (
    <Main>
      <Logo>the planets</Logo>
      <NavBarIcon src={navbarIcon} onClick={showNavbar}></NavBarIcon>
    </Main>
  );
};

export default Header;

const Main = styled.div`
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  text-transform: uppercase;
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.0499999523162842px;
  text-align: left;
  color: white;
`;

const NavBarIcon = styled.img`
  height: 17px;
  cursor: pointer;
`;
