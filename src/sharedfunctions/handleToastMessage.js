import {setAppToast} from '../redux/AppLoader/appLoaderAction';
import {store} from '../redux/store';

export const throwError = async error => {
  return store.dispatch(
    setAppToast({
      showToast: true,
      title: 'Error',
      description: error,
      status: 'danger',
    }),
  );
};

export const throwSuccess = async message => {
  return store.dispatch(
    setAppToast({
      showToast: true,
      title: 'Success!!!',
      description: message,
      status: 'success',
    }),
  );
};
