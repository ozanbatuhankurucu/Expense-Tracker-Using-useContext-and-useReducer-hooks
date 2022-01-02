import React from 'react'
import { useExpenseTrackerContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useExpenseTrackerContext()

  const amounts = transactions.map((transaction) => transaction.amount)

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0)
    .toFixed(2)

  const expense = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0) * -1
  ).toFixed(2)

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>-${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
