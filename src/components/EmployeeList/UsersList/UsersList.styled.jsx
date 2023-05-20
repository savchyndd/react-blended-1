import styled from '@emotion/styled';

export const UserList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: ${props => props.theme.spacing(2)};
`;

export const UserBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: ${props => props.theme.spacing(1)};

  background: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};

  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(5)};

  p {
    margin: 0;
  }

  button {
    padding: 6px 12px;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.spacing(2)};

    cursor: pointer;

    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.small};
    }
  }

  span {
    color: black;

    border-radius: ${({ theme }) => theme.spacing(2)};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
