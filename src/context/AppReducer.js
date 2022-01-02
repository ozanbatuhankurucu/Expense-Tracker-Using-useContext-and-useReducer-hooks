const AppReducer = (initialState, action) => {
  const { id } = action?.payload

  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...initialState,
        transactions: [action.payload, ...initialState.transactions]
      }
    case 'DELETE_TRANSACTION':
      return {
        ...initialState,
        transactions: initialState.transactions.filter((transaction) => transaction.id !== id)
      }
    default:
      return initialState
  }
}

export default AppReducer
