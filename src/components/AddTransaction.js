import React, { useState } from 'react'
import { generateID } from '../Utils/utils'
import { useExpenseTrackerContext } from '../context/GlobalState'

const TRANSACTION_INITIALVALUE = {
  text: '',
  amount: ''
}

const AddTransaction = () => {
  const { addTransaction } = useExpenseTrackerContext()
  const [transaction, setTransaction] = useState(TRANSACTION_INITIALVALUE)
  const { text, amount } = transaction

  const handleOnChange = (event) => {
    const {
      target: { name, value }
    } = event

    setTransaction((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text === '' || amount === '') {
      alert('Please add a text and amount')
      return
    }
    const transaction = {
      text,
      amount: +amount,
      id: generateID()
    }
    addTransaction(transaction)
    setTransaction(TRANSACTION_INITIALVALUE)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            name='text'
            value={text}
            type='text'
            onChange={handleOnChange}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            name='amount'
            type='number'
            onChange={handleOnChange}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn' type='submit'>
          Add transaction
        </button>
      </form>
    </>
  )
}

export default AddTransaction
