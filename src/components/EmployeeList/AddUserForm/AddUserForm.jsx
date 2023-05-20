import { Component } from 'react';

import { Button } from 'components';
import { SearchFormStyled, InputSearch } from './AddUserForm.style';

export class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addUser } = this.props;
    addUser({ ...this.state });
    this.setState({ name: '', email: '' });
  };

  render() {
    const { name, email } = this.state;

    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <InputSearch
          placeholder="Write employee Name"
          required
          name="name"
          type="text"
          value={name}
          onChange={this.handleChange}
        />

        <InputSearch
          placeholder="Write employee Email"
          required
          name="email"
          type="text"
          value={email}
          onChange={this.handleChange}
        />
        <Button type="submit">Save</Button>
      </SearchFormStyled>
    );
  }
}
