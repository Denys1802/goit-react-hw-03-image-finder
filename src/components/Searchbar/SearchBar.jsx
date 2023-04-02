import { Component } from 'react';
import {
  SeaechHeader,
  SearchForm,
  FormBtn,
  FormLabel,
  FormInput,
} from './Searchbar.styled';
class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = ({ target }) => {
    const value = target.value.toLowerCase().trim();
    this.setState({ inputValue: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createSearchText(this.state.inputValue);
  };
  render() {
    return (
      <SeaechHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <FormBtn type="submit">
            <FormLabel>Search</FormLabel>
          </FormBtn>

          <FormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </SearchForm>
      </SeaechHeader>
    );
  }
}

export default Searchbar;
