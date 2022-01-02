import React, { createContext, useReducer, useContext } from 'react'
import AppReducer from './AppReducer'

// initialState
const initialState = {
  transactions: []
}

// Create Context
const ExpenseTrackerContext = createContext()

export const useExpenseTrackerContext = () => useContext(ExpenseTrackerContext)

// Provider Component
export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: { id }
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <ExpenseTrackerContext.Provider value={{ ...state, deleteTransaction, addTransaction }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
