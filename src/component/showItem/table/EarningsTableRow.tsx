import React from 'react';
import './Table.css';

interface EarningsTableRowProps {
  date: string;
  description: string;
  amount: string;
  balance: string;
}

const EarningsTableRow: React.FC<EarningsTableRowProps> = ({ date, description, amount, balance }) => {
  return (
    <tr className="earnings-table-row">
      <td>{date}</td>
      <td>{description}</td>
      <td>{amount}</td>
      <td>{balance}</td>
    </tr>
  );
};

export default EarningsTableRow;
