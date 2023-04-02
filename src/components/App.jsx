import { Component } from 'react';
import { AppWrap } from './App.styled';
import { fetchImages } from './services/fetch';
import { Loader } from './Loader/Loader';
import LoadMoreBtn from './Button/Button';
import Searchbar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
class App extends Component {
  state = {
    searchText: '',
    images: null,
    page: 1,
    isLoading: false,
    isHidden: false,
    totalHits: 0,
    error: false,
  };

  componentDidUpdate(_, prevState) {
    const searchText = this.state.searchText;
    let page = this.state.page;
    if (prevState.searchText !== searchText && searchText) {
      this.setState({ isLoading: true, page: 1 });
      fetchImages(searchText, page)
        .then(data => {
          this.setState({
            images: data.hits,
            isLoading: false,
            isHidden: true,
            totalHits: data.totalHits,
          });
        })
        .catch(error => this.setState({ error: true }));
    }

    if (prevState.page < this.state.page) {
      this.setState({ isLoading: true });
      fetchImages(searchText, page)
        .then(({ hits }) => {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...hits],
              page,
            };
          });
        })
        .catch(error => this.setState({ error: true }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  createSearchText = searchText => {
    this.setState({ searchText });
  };

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  render() {
    const { images, isLoading, isHidden, error, totalHits } = this.state;
    return (
      <>
        <AppWrap>
          <Searchbar
            createSearchText={this.createSearchText}
            resetPage={this.resetPage}
          />
          {error && <h1>Please try again</h1>}
          {images && <ImageGallery images={this.state.images} />}
          {images && !isLoading && isHidden && totalHits > 12 && (
            <LoadMoreBtn onClick={this.incrementPage} isLoading={isLoading} />
          )}
          {isLoading && <Loader widthLoader={'200'} heightLoader={'200'} />}
        </AppWrap>
      </>
    );
  }
}

export default App;
