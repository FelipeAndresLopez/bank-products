const INITIAL_STATE = {
  accountInfo: null,
  showOtherBanks: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_ACCOUNT_INFO':
      return {
        ...state,
        accountInfo: action.payload
      };

    case 'SHOW_OTHER_PRODUCTS':
      return {
        ...state,
        showOtherBanks: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
