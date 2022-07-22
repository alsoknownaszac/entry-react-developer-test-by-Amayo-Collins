import styled from "styled-components";

export const ContainerDiv = styled.div`
  .hr {
    border-bottom: 1px solid #e5e5e5;
  }
  .cart-item-container {
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: ${({ lgCart }) => (lgCart ? "35px" : "32px")};
    .cart-order-container {
      height: ${({ lgCart }) => (lgCart ? "288px" : "190px")};
      display: flex;
      .cart-order {
        height: 100%;
        font-size: ${({ lgCart }) => (lgCart ? "24px" : "16px")};
        display: grid;
        flex-direction: column;
        align-content: space-between;
        margin-right: ${({ lgCart }) => (lgCart ? "24px" : "8px")};
        .change-quantity-btn {
          font-size: ${({ lgCart }) => (lgCart ? "18px" : "14px")};
          padding: ${({ lgCart }) => (lgCart ? "12px" : "4px")};
          line-height: 0;
          border: 1px solid #1d1f22;
          cursor: pointer;
          :hover,
          :focus {
            background: #1d1f22;
            color: #ffffff;
          }
        }

        .cart-quantity {
          font-weight: 500;
          margin: auto;
        }
      }
      .cart-images-container {
        position: relative;
        width: ${({ lgCart }) => (lgCart ? "200px" : "121px")};
        height: 100%;
        .cart-images {
          position: relative;
          width: inherit;
          height: inherit;
        }
        .change-image-container {
          position: absolute;
          right: 16px;
          bottom: 16px;
          display: flex;
          .change-img-btn {
            border: none;
            font-size: 20px;
            line-height: 0;
            color: #ffffff;
            padding: 6px 9px;
            cursor: pointer;
          }
          .img-mr {
            margin-right: 8px;
          }
          .clickableBtn {
            background: rgba(0, 0, 0, 0.73);
          }
          .disabledBtn {
            background: rgba(0, 0, 0, 0.23);
          }
        }
      }
    }
  }
`;

export const HorzRule = styled.div`
  border-top: ${({ cartItems }) =>
    cartItems > 0 ? "1px solid #e5e5e5" : "none"};
`;
