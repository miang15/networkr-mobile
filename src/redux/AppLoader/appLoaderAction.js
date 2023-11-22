export const APP_LOADER_ACTION_TYPES = {
  APP_LOADING: 'APP_LOADING',
  APP_TOAST: 'APP_TOAST',
  RESET_STATE: 'RESET_STATE',
};

export const resetState = () => ({
  type: APP_LOADER_ACTION_TYPES.RESET_STATE,
});

export const setAppLoading = payload => {
  return dispatch => {
    return dispatch({
      type: APP_LOADER_ACTION_TYPES.APP_LOADING,
      payload,
    });
  };
};

export const setAppToast = payload => {
  return dispatch => {
    return dispatch({
      type: APP_LOADER_ACTION_TYPES.APP_TOAST,
      payload,
    });
  };
};
