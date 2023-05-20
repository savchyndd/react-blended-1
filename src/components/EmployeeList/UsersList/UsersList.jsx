import PropTypes from 'prop-types';
import { UserBox, UserList } from './UsersList.module';

export const UsersList = ({ users, deleteUser, toggleJobStatus }) => {
  return (
    <UserList>
      {users.map(({ id, name, email, hasJob }) => (
        <UserBox key={id}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>
            Has job:{' '}
            <span onClick={() => toggleJobStatus(id)}>
              {
                hasJob
                // hasJob.toString()
              }
            </span>
          </p>
          <button type="button" onClick={() => deleteUser(id)}>
            Delete
          </button>
        </UserBox>
      ))}
    </UserList>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
