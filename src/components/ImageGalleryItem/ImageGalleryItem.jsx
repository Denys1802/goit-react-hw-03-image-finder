import { Component } from 'react';
import { ImageItem, ImageItemImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  heandelModalOpen = e => {
    const currentImage = this.props.images.find(image => {
      return image.webformatURL === e.target.src;
    });

    this.props.modalOpen(currentImage);
  };

  render() {
    const { images } = this.props;
    return images.map(image => {
      return (
        <ImageItem key={image.id}>
          <ImageItemImg
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.heandelModalOpen}
          />
        </ImageItem>
      );
    });
  }
}
