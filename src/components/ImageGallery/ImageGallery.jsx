import { Component } from 'react';

import { fetchImages } from 'api/search_gallery_api';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImageGallery, WrapperGallery } from './ImageGallery.styled';

export class Gallery extends Component {
  state = {
    dataImages: [],
    page: 1,
    toggleLoader: false,
    toggleButton: true,
    toggleModal: false,
    largeImageUrl: '',
    largeImageAlt: '',
  };

  componentDidMount() {
    this.setState({
      toggleLoader: true,
      toggleButton: false,
    });
    this.getGallery();
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchName } = this.props;
    const { page } = this.state;

    if (searchName === '') return;
    else if (prevProps.searchName !== searchName) {
      this.setState({
        dataImages: [],
        page: 1,
        toggleLoader: true,
        toggleButton: false,
      });
      this.getGallery();
    } else if (prevState.page !== page) {
      this.setState({ toggleLoader: true });

      this.getGallery();
    }
  }

  getGallery = () => {
    const { page } = this.state;

    fetchImages(this.props.searchName, page)
      .then(images => {
        if (images.hits.length === 0) return;
        if (Math.ceil(images.total / 12) <= page) {
          this.setState({ toggleButton: false });
        } else {
          this.setState({ toggleButton: true });
        }

        this.setState(state => {
          return {
            dataImages: [...state.dataImages, ...images.hits],
          };
        });
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ toggleLoader: false });
      });
  };

  clickLoadMore = () => {
    this.setState(state => {
      return {
        page: state.page + 1,
      };
    });
  };

  modalOpen = currentImage => {
    this.setState({
      largeImageUrl: currentImage.largeImageURL,
      largeImageAlt: currentImage.tags,
      toggleModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      largeImageUrl: '',
      largeImageAlt: '',
      toggleModal: false,
    });
  };

  render() {
    const {
      dataImages,
      toggleLoader,
      page,
      toggleButton,
      toggleModal,
      largeImageUrl,
      largeImageAlt,
    } = this.state;

    const { searchName } = this.props;

    return (
      <>
        {toggleLoader && page === 1 && (
          <Loader widthLoader={'200'} heightLoader={'200'} />
        )}
        {dataImages[0] && (
          <>
            {searchName && (
              <WrapperGallery>
                <ImageGallery>
                  <ImageGalleryItem
                    images={dataImages}
                    modalOpen={this.modalOpen}
                  />
                </ImageGallery>
                {toggleButton && (
                  <Button
                    clickLoadMore={this.clickLoadMore}
                    toggleLoader={toggleLoader}
                  />
                )}
              </WrapperGallery>
            )}
            {toggleModal && (
              <Modal
                url={largeImageUrl}
                alt={largeImageAlt}
                closeModal={this.closeModal}
              />
            )}
          </>
        )}
      </>
    );
  }
}
