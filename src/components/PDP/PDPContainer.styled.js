import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 100px;
  .product-image-container {
    grid-column: span 2 / span 2;
    display: flex;
    .other-images-container {
      width: 80px;
      margin-right: 40px;
      height: 511px;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        width: 0px;
      }
      .other-images {
        cursor: pointer;
        width: inherit;
        height: 80px;
        margin-bottom: 40px;
        .imgs {
          height: 100%;
          width: 100%;
        }
      }
    }
    .main-image-container {
      width: 610px;
      height: 511px;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        width: 0px;
      }
      .main-image {
        height: 100%;
        width: 100%;
        .imgs {
          width: 100%;
        }
      }
    }
  }
  .product-details {
    grid-column: span 1 / span 1;
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
  li {
    margin-bottom: 18px;
  }
`;
