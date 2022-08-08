import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductWrapper = styled.div`
  position: relative;
  padding: 16px;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:focus {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

export const ProductDiv = styled(Link)`
  position: relative;
  color: #1d1f22;
  text-decoration: none;
  cursor: pointer;
  grid-column: span 1 / span 1;
`;

export const ImgWrapper = styled.div`
  position: relative;
  background: ${({ outOfStock }) => (outOfStock ? `#ffffff` : `none`)};
  opacity: ${({ outOfStock }) => (outOfStock ? `0.5` : `none`)};
  margin-bottom: 24px;
  width: 100%;
  height: 330px;
  .img {
    position: relative;
    width: 100%;
    max-height: 100%;
    object-fit: fill;
  }
  .out-of-stock-text {
    display: ${({ outOfStock }) => (outOfStock ? `flex` : `none`)};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 24px;
    color: #8d8f9a;
  }
`;

export const ProductText = styled.div`
  color: ${({ outOfStock }) => (outOfStock ? `#8D8F9A` : `#1D1F22`)};
  font-size: 18px;
  line-height: 160%;
  font-family: "Raleway";

  font-weight: 300;
  .amount {
    font-weight: 500;
  }
`;

export const AddToCartBtn = styled.button`
  border: none;
  z-index: 10;
  position: absolute;
  width: 52px;
  height: 52px;
  bottom: 72px;
  right: 31px;
  background: #5ece7b;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  border-radius: 50%;
  cursor: pointer;
`;

export const CartIcon = styled.img.attrs(() => ({
  alt: "cartIcon",
  src: "/cartIcon.svg",
}))``;
