import "./Table.css"
import EarningsTableRow from './EarningsTableRow';


const data = [
    { date: '2024-06-01', description: 'Deposit', amount: '$1,000.00', balance: '$1,000.00' },
    { date: '2024-06-02', description: 'Withdrawal', amount: '$200.00', balance: '$800.00' },
    { date: '2024-06-03', description: 'Interest', amount: '$5.00', balance: '$805.00' },
    // Add more rows as needed
];

const Table = () => {
    return (
        <div className="earnings-table-container">
            <h2>Earnings and Transactions</h2>
            <table className="earnings-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <EarningsTableRow
                            key={index}
                            date={row.date}
                            description={row.description}
                            amount={row.amount}
                            balance={row.balance}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table