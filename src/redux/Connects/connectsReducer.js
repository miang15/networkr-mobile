import {CONNECTS_ACTION_TYPES} from './connectsAction';

const initialState = {
  pendingUser: [],
  connectedUser: [],
};

export const connectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTS_ACTION_TYPES.SET_PENDING_USER:
      return {
        ...state,
        pendingUser: [...action.payload],
      };
    case CONNECTS_ACTION_TYPES.UPDATE_PENDING_USER:
      let arr = state?.pendingUser?.filter(item => item?.id !== action.payload);
      return {
        ...state,
        pendingUser: [...arr],
      };
    case CONNECTS_ACTION_TYPES.SET_CONNECTED_USER:
      return {
        ...state,
        connectedUser: [...action.payload],
      };
    case CONNECTS_ACTION_TYPES.REMOVE_CONNECTED_USER:
      let list = state?.connectedUser?.filter(
        item => item?.id !== action.payload,
      );
      return {
        ...state,
        connectedUser: [...list],
      };

    default:
      return state;
  }
};

export default connectsReducer;
