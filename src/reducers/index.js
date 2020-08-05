const INITIAL_STATE = {
  accountInfo: null
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_ACCOUNT_INFO':
      return {
        ...state,
        accountInfo: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
