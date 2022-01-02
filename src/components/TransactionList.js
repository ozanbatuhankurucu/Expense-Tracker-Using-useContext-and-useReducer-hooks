import React from 'react'
import Transaction from './Transaction'
import { useExpenseTrackerContext } from '../context/GlobalState'

const TransactionList = () => {
  const { transactions } = useExpenseTrackerContext()

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList
