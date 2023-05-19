import data from 'data/data';

import Statistics from 'components/Statistics/Statistics';

export const StatisticsTabs = () => {
  return <Statistics title="Main Statistics" stats={data} />;
};
