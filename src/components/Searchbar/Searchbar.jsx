import React, { Component } from 'react';
import css from './Searchbar.module.css';

// export const ImageGallery = ({children}) {
//   return <ul className={css.imageGallery}> { children }</ul>
// }

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };
  handleOnChange = event => {
    this.setState({
      searchValue: event.currentTarget.value.toLowerCase().trim(),
    });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleOnSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleOnChange}
            value={this.state.searchValue}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
