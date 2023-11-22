import {AUTH_ACTION_TYPES} from '../Auth/authAction';

const initialState = {
  user: {},
  alluser: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: {...action.payload},
      };
    case AUTH_ACTION_TYPES.SET_ALL_USER:
      return {
        ...state,
        alluser: [...action.payload],
      };
    case AUTH_ACTION_TYPES.UPDATE_ALL_USER:
      let arr = state.alluser.filter(item => item?.id !== action.payload);
      return {
        ...state,
        alluser: [...arr],
      };

    default:
      return state;
  }
};

export default authReducer;
