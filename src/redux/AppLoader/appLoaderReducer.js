import {APP_LOADER_ACTION_TYPES} from './appLoaderAction';

const initialState = {
  loading: false,
  toast: {
    showToast: false,
    title: '',
    description: '',
    status: 'success',
  },
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADER_ACTION_TYPES.APP_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case APP_LOADER_ACTION_TYPES.APP_TOAST:
      return {
        ...state,
        toast: {...action.payload},
      };
    default:
      return state;
  }
};

export default loadingReducer;
