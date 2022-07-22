import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavFixed = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const NavWrapper = styled.div`
  background: #ffffff;
  padding-left: 101px;
  padding-right: 101px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .category-tab {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const Tabs = styled(Link)`
  color: #1d1f22;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: inherit;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: ${({ selected }) => (selected ? "2px solid #5ece7b" : "")};
  color: ${({ selected }) => (selected ? "#5ece7b" : "")};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CartWrapper = styled.div`
  position: relative;
  .icon {
    position: relative;
  }
  .count {
    position: absolute;
    top: -40%;
    right: -50%;
    z-index: 1;
    width: 20px;
    height: 20px;
    border-radius: 60px;
    text-align: center;
    font-family: "Roboto";

    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    background: #1d1f22;
    color: #ffffff;
  }
  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export const BagContainer = styled.div`
  font-size: 16px;
  margin-bottom: 32px;
  .title {
    font-weight: 700;
  }
`;

export const LogoImg = styled.img.attrs(() => ({
  alt: "logo",
  src: "/logo.svg",
}))`
  position: absolute;
  left: 50%;
`;
