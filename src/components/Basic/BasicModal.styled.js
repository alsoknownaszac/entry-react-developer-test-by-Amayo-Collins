import styled from "styled-components";

export const Modal = styled.div``;

export const ModalBtn = styled.div`
  cursor: pointer;
  margin-left: 22px;
`;

export const ModalBody = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 80px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(57, 55, 72, 0.22);
`;

export const ModalContent = styled.div`
  overflow-y: scroll;
  position: relative;
  background: #ffffff;
  right: 72px;
  margin-left: auto;
  max-height: 450px;
  width: 325px;
  padding: 32px 16px;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 0.2px solid slategrey;
    border-radius: 10px;
  }
`;
