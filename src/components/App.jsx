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
    totalHits: 0,
    error: false,
  };

  componentDidUpdate(_, prevState) {
    const searchText = this.state.searchText.toLowerCase().trim();
    let page = this.state.page;
    if (prevState.searchText !== searchText && searchText) {
      this.setState({ isLoading: true, page: 1 });
      fetchImages(searchText, page)
        .then(data => {
          this.setState({
            images: data.hits,
            isLoading: false,
            totalHits: data.totalHits,
          });
        })
        .catch(error => this.setState({ error: true }));
    }

    if (prevState.page < this.state.page) {
      this.setState({ isLoading: true });
      fetchImages(searchText, (page += 1))
        .then(({ hits }) => {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...hits],
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

  render() {
    const { images, isLoading, totalHits, error, page } = this.state;
    return (
      <>
        <AppWrap>
          <Searchbar createSearchText={this.createSearchText} />
          {error && <h1>Please try again</h1>}
          {images && <ImageGallery images={this.state.images} />}
          {images && !isLoading && totalHits !== page && (
            <LoadMoreBtn onClick={this.incrementPage} />
          )}
          {isLoading && <Loader widthLoader={'200'} heightLoader={'200'} />}
        </AppWrap>
      </>
    );
  }
}

export default App;
