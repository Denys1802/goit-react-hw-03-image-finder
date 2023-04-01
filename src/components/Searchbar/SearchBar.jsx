import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchbarWrap,
  Form,
  FormBtn,
  FormLabel,
  FormInput,
} from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  heandleChange = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  heandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue.trim());
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <SearchbarWrap>
        <Form onSubmit={this.heandleSubmit}>
          <FormBtn type="submit">
            <FormLabel>Search</FormLabel>
          </FormBtn>

          <FormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.heandleChange}
          />
        </Form>
      </SearchbarWrap>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
