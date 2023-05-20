import { Button } from 'components';
export const FormButton = ({ text, clickHandler }) => {
  return <Button onClick={clickHandler}>{text}</Button>;
};
