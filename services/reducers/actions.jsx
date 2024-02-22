export const RESET_STATE = 'RESET_STATE'
export const SET_TOKEN = 'SET_TOKEN'
export const SET_ACCOUNT_DATA = 'SET_ACCOUNT_DATA'




export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

export const setAccountData = accountData => dispatch => {
  dispatch({
    type: SET_ACCOUNT_DATA,
    payload: accountData
  });
};

export const resetState = () => dispatch => {
    dispatch({
      type: RESET_STATE,
    });
};




