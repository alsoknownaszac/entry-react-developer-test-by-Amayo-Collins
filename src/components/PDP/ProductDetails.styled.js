import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  .product-name-n-type {
    font-family: "Raleway";
    font-size: ${({ nameFontStyle }) => nameFontStyle};
    margin-bottom: ${({ lgDetails, lgCart }) =>
      lgDetails ? "43px" : lgCart ? "20px" : "10px"};
    .product-name {
      margin-bottom: ${({ lgCart }) => (!lgCart ? "10px" : "16px")};
      font-weight: ${({ nameWeightStyle }) => nameWeightStyle || 400};
    }
  }
  .details {
    margin-bottom: ${({ lgDetails, lgCart }) =>
      lgDetails ? "30px" : lgCart ? "20px" : "10px"};
  }
  .product-label {
    font-family: "Roboto Condensed";
    font-weight: ${({ lgCart }) => (!lgCart ? "400" : "700")};
    font-size: ${({ labelFontStyle }) => labelFontStyle};
    line-height: 18px;
    margin-bottom: 8px;
    color: #1d1f22;
    text-transform: ${({ lgTextTransform }) =>
      lgTextTransform ? "uppercase" : "capitalize"};
  }
  .price {
    font-family: "Raleway";
    font-weight: ${({ lgCart }) => (!lgCart ? "500" : "700")};
    font-size: ${({ priceFontStyle }) => priceFontStyle};
  }
`;

export const AttributesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AttributesCard = styled.div.attrs(() => ({
  tabIndex: 0,
}))`
  cursor: ${({ isCart }) => (!isCart ? "pointer" : "default")};
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: ${({ sizeFontStyle }) => sizeFontStyle};
  border: 1px solid #1d1f22;
  padding: ${({ lgCart }) => (!lgCart ? "5px 8px" : "12px 20px")};
  margin-right: ${({ lgCart }) => (!lgCart ? "7px" : "12px")};
  background: ${({ attributeSelected }) =>
    attributeSelected ? `#1d1f22` : `none`};
  color: ${({ attributeSelected }) =>
    attributeSelected ? `#ffffff` : `#1D1F22`};
`;

export const ColorCard = styled.div.attrs(() => ({ tabIndex: 0 }))`
  cursor: ${({ isCart }) => (!isCart ? "pointer" : "default")};
  padding: 2px;
  margin-right: 10px;
  border: ${({ attributeSelected }) =>
    attributeSelected ? `1px solid #5ece7b` : `#none`};
  .colors {
    width: ${({ lgCart }) => (!lgCart ? "16px" : "32px")};
    height: ${({ lgCart }) => (!lgCart ? "16px" : "32px")};
    background: ${({ colorBgStyle }) => colorBgStyle};
  }
`;
