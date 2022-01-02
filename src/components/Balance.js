import React from 'react'
import { useExpenseTrackerContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useExpenseTrackerContext()

  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0)

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  )
}

export default Balance
