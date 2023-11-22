import {combineReducers} from 'redux';
import loadingReducer from './AppLoader/appLoaderReducer';
import authReducer from './Auth/authReducer';
import {APP_LOADER_ACTION_TYPES} from './AppLoader/appLoaderAction';
import connectsReducer from './Connects/connectsReducer';

const reducers = combineReducers({
  loadingReducer: loadingReducer,
  auth: authReducer,
  network: connectsReducer,
});

export const RootReducer = (state, action) => {
  if (action.type === APP_LOADER_ACTION_TYPES.RESET_STATE) {
    state = undefined;
  }
  return reducers(state, action);
};
