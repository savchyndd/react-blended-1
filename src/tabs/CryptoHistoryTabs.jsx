import transactions from 'data/transactions.json';

import CryptoHistory from 'components/CryptoHistory/CryptoHistory';

export const CryptoHistoryTabs = () => {
  return <CryptoHistory items={transactions} />;
};
