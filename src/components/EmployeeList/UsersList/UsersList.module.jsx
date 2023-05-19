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
  width: calc(100% / 4);
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
`;
