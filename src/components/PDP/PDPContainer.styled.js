import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  gap: 100px;
  .product-image-container {
    display: flex;
    gap: 40px;
    display: flex;
    .other-images-container {
      width: 80px;
      height: fit-content;
      .other-images {
        cursor: pointer;
        width: inherit;
        height: inherit;
        .imgs {
          width: 100%;
          height: inherit;
          margin-bottom: 40px;
        }
      }
    }
  }
  .product-details {
    width: 292px;
    .add-to-cart-btn {
      cursor: pointer;
      border: none;
      display: block;
      width: 100%;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      padding: 16px 0px;
      background: #5ece7b;
      color: #ffffff;
      margin-bottom: 40px;
    }
    .add-to-cart-btn:disabled,
    .add-to-cart-btn[disabled] {
      cursor: not-allowed;
      opacity: 0.7;
    }
    .description {
      font-family: "Roboto";

      font-weight: 400;
      font-size: 16px;
    }
  }
`;

export const ProductDescription = styled.div`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  height: 350px;
  ::-webkit-scrollbar {
    width: 0px;
  }
  overflow-y: auto;
  h1,
  h3 {
    line-height: 150%;
  }
  li {
    margin-bottom: 18px;
  }
`;

export const MainImage = styled.div`
  width: 610px;
  height: fit-content;
  position: relative;
  background: ${({ outOfStock }) => (outOfStock ? `#ffffff` : `none`)};
  opacity: ${({ outOfStock }) => (outOfStock ? `0.5` : `none`)};
  .imgs {
    width: 100%;
    height: inherit;
    position: relative;
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
