import { formatDate } from 'utils/formatDate';

import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.module';

const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, price, amount, date }, idx) => (
          <Tr key={id}>
            <Td>{idx + 1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{formatDate(date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};

export default CryptoHistory;
