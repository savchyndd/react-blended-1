import { Component } from 'react';
import { nanoid } from 'nanoid';

import { data } from 'data/users';
import { UsersList } from '../components/EmployeeList/UsersList/UsersList';
import { FormButton } from '../components/EmployeeList/FormButton/FormButton';
import { AddUserForm } from '../components/EmployeeList/AddUserForm/AddUserForm';

export class EmployeeListTab extends Component {
  state = {
    users: data,
    isFormShown: false,
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId),
    }));
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  addUser = obj => {
    const newUser = {
      id: nanoid(),
      ...obj,
    };

    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isFormShown: false,
    }));
  };

  toggleJobStatus = userId => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id !== userId) {
          return user;
        } else {
          return { ...user, hasJob: !user.hasJob };
        }
      }),
    }));
  };

  render() {
    const { users, isFormShown } = this.state;

    return (
      <>
        <UsersList
          users={users}
          deleteUser={this.deleteUser}
          toggleJobStatus={this.toggleJobStatus}
        />
        {isFormShown ? (
          <AddUserForm addUser={this.addUser} />
        ) : (
          <FormButton text="Add user" clickHandler={this.openForm} />
        )}
      </>
    );
  }
}
