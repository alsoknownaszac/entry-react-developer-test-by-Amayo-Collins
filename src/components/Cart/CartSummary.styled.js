import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartSummaryContainer = styled.div`
  margin-top: ${({ lgCart }) => (lgCart ? "35px" : "32px")};
  width: ${({ lgCart }) => (lgCart ? "279px" : "")};
  .cart-summary {
    display: flex;
    align-items: center;
    font-size: ${({ lgCart }) => (lgCart ? "24px" : "16px")};
    .title {
      width: 104px;
    }
    .bold {
      font-weight: 600;
    }
    .amount {
      font-weight: 700;
      margin-left: ${({ lgCart }) => (lgCart ? "0px" : "auto")};
    }
  }
  .cs-mb {
    margin-bottom: 8px;
  }
  .cs-last {
    margin-bottom: ${({ lgCart }) => (lgCart ? "20px" : "32px")};
  }
`;

export const OrderBtnLg = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  font-weight: 600;
  font-size: 14px;
  padding: 13px 0;
  background: #5ece7b;
  color: #ffffff;
  text-align: center;
  :disabled,
  [disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const CartBtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 12px;
  font-weight: 600;
  font-size: 14px;
`;

export const ViewBagBtn = styled(Link)`
  border: 1px solid #1d1f22;
  padding: 13px 0;
  text-align: center;
  color: #1d1f22;
  text-decoration: none;
  :hover {
    background: #1d1f22;
    color: #ffffff;
  }
`;

export const CheckOutBtn = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  background: #5ece7b;
  color: #ffffff;
  padding: 13px 0;
  text-align: center;
  :disabled,
  [disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
