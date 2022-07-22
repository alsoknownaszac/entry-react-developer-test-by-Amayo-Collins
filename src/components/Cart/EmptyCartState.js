import styled from "styled-components";

const EmptyState = styled.div`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
`;

export const EmptyCartState = (Component) => {
  return (props) => (
    <Component
      {...props}
      emptyState={<EmptyState>Your Cart is Empty</EmptyState>}
    />
  );
};
