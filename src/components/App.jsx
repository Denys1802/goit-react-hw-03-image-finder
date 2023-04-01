import { Component } from 'react';
import { Gallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/SearchBar';
export class App extends Component {
  state = {
    searchName: '',
  };

  onSubmitSearch = searchName => {
    this.setState({ searchName });
  };
  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmitSearch} />
        {this.state.searchName && (
          <Gallery searchName={this.state.searchName} />
        )}
      </>
    );
  }
}
