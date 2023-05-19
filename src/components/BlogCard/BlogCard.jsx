import { formatDateToNow } from 'utils/formatDate';
import {
  Card,
  CardHeader,
  CardPoster,
  CardBody,
  Tag,
  CardTitle,
  CardText,
  CardFooter,
  UserBox,
  UserInfo,
  Avatar,
  UserName,
  Date,
} from './BlogCard.styled';

const BlogCard = ({
  article: { poster, tag, title, description, name, avatar, postedAt },
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardPoster src={poster} alt={title} />
        </CardHeader>
        <CardBody>
          <Tag>{tag}</Tag>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <UserBox>
            <Avatar src={avatar} alt={name} />
            <UserInfo>
              <UserName>{name}</UserName>
              <Date>{formatDateToNow(postedAt)}</Date>
            </UserInfo>
          </UserBox>
        </CardFooter>
      </Card>
    </>
  );
};

export default BlogCard;
