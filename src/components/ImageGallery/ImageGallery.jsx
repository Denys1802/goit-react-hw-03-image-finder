import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList, Wrap } from "./ImageGallery.styled";

const ImageGallery = ({ images }) => {
  return (
    images && (
      <Wrap>
        <GalleryList>
          {images.map(({ webformatURL, id, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          ))}
        </GalleryList>
      </Wrap>
    )
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
