import { Component } from 'react';
import { Overlay, ModalStyle } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEscModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscModal);
  }

  closeEscModal = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { url, alt } = this.props;
    return (
      <Overlay onClick={this.handleBackDropClick}>
        <ModalStyle>
          <img src={url} alt={alt} />
        </ModalStyle>
      </Overlay>
    );
  }
}
