import React, { Component } from "react";
import { Modal, ModalBtn, ModalBody, ModalContent } from "./BasicModal.styled";

export default class BasicModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const { btn, children } = this.props;

    const HandleCloseModal = () => {
      this.setState((prevState) => ({
        open: !prevState.open,
      }));
    };

    return (
      <Modal>
        <ModalBtn onClick={HandleCloseModal}>{btn}</ModalBtn>
        {this.state.open && (
          <ModalBody onClick={HandleCloseModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              {children}
            </ModalContent>
          </ModalBody>
        )}
      </Modal>
    );
  }
}
