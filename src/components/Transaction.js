import React from 'react'
import { useExpenseTrackerContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useExpenseTrackerContext()
  const { text, amount, id } = transaction
  const sign = amount < 0 ? '-' : '+'
  const amountColor = amount < 0 ? 'minus' : 'plus'

  return (
    <li className={amountColor}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className='delete-btn'>
        x
      </button>
    </li>
  )
}

export default Transaction
