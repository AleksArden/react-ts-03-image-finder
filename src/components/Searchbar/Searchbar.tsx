import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import css from './Searchbar.module.css';

export class Searchbar extends Component<{ onSubmit: (Search: string) => void }, { inputValue: string }> {
  state = {
    inputValue: '',
  };

  handleChange = ({ target: { value } }:React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: value });
  };

  handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const { inputValue } = this.state;
    this.props.onSubmit(inputValue.trim());
  };

  render() {
    const { inputValue } = this.state;

    return (
      <header className={css.searchbar}>

        <form className={css.form} onSubmit={this.handleSubmit}>
          <button className={css.button} type="submit">
            <BsSearch className={css.icon} />
          </button>
          
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={inputValue}
          />
        </form>
      </header>
    );
  }
}
