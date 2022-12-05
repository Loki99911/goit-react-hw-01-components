import PropTypes from 'prop-types';
import { TableRow, TableBodyCell } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableBodyCell>{type}</TableBodyCell>
      <TableBodyCell>{amount}</TableBodyCell>
      <TableBodyCell>{currency}</TableBodyCell>
    </TableRow>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};