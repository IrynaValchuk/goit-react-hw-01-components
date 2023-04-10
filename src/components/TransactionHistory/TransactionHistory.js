import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}, index)=> (
      <tr key={id} style={{backgroundColor: index % 2 === 0 ? 'var(--color-white)' : 'var(--bgc-gray)'}}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))
    }
  </tbody>
</table>
)}

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};