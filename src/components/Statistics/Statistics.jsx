import {
  BsFillHandThumbsUpFill,
  BsPeopleFill,
  BsFillCartFill,
  BsTreeFill,
  BsFillQuestionOctagonFill,
} from 'react-icons/bs';

import {
  StatisticTitle,
  StatisticsList,
  StatisticBox,
  StatisticCounter,
  StatisticText,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  const choseIcon = title => {
    const iconsName = ['customers', 'members', 'products', 'trees'];
    const curentTitle = iconsName.find(el => title.toLowerCase().includes(el));

    switch (curentTitle) {
      case 'customers':
        return <BsFillHandThumbsUpFill />;
      case 'members':
        return <BsPeopleFill />;
      case 'products':
        return <BsFillCartFill />;
      case 'trees':
        return <BsTreeFill />;
      default:
        return <BsFillQuestionOctagonFill />;
    }
  };

  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, title, total }) => (
          <StatisticBox key={id}>
            {choseIcon(title)}
            <StatisticCounter>{total}</StatisticCounter>
            <StatisticText>{title}</StatisticText>
          </StatisticBox>
        ))}
      </StatisticsList>
    </>
  );
};

export default Statistics;
