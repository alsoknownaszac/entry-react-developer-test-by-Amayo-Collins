import styled from "styled-components";

export const LayoutDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  font-family: "Raleway";
`;

export const LayoutContent = styled.div`
  padding-top: 80px;
  height: calc(100% - 80px);
  overflow-y: auto;
  overflow-x: hidden;
  .content {
    padding-top: 80px;
    padding-left: 101px;
    padding-right: 101px;
    padding-bottom: 101px;
  }
`;

export const PageTitle = styled.div`
  text-transform: uppercase;
  font-weight: ${({ weight }) => weight || 400};
  font-size: ${({ size }) => size};
  margin-bottom: ${({ mb }) => mb};
  line-height: 160%;
  color: #1d1f22;
`;
