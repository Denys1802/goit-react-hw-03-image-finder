import { Component } from "react";
import { Overlay, ModalImg } from "./Modal.styled";
class Modal extends Component {
  hideModalKeydown = (e) => {
    if (e.key === "Escape") {
      this.props.onModalClick();
    }
  };

  hideModalClick = (e) => {
    if (e.target.dataset.action === "overlay") {
      this.props.onModalClick();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.hideModalKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.hideModalKeydown);
  }

  render() {
    return (
      <Overlay onClick={this.hideModalClick} data-action="overlay">
        <ModalImg>{this.props.children}</ModalImg>
      </Overlay>
    );
  }
}

export default Modal;
