import {
  throwError,
  throwSuccess,
} from '../../sharedfunctions/handleToastMessage';
import {getLoggedInUser} from '../../sharedfunctions/supabaseHandler';
import supabase from '../../supabase/service';
import {setAppLoading} from '../AppLoader/appLoaderAction';
import {strings} from '../../strings/strings';
import {SUPABASE_TABLES} from '../../supabase/tables';

export const AUTH_ACTION_TYPES = {
  SET_USER: 'SET_USER',
  SET_ALL_USER: 'SET_ALL_USER',
  UPDATE_ALL_USER: 'UPDATE_ALL_USER',
};

export const setUser = payload => {
  return dispatch =>
    dispatch({
      type: AUTH_ACTION_TYPES.SET_USER,
      payload,
    });
};

export const setAllUser = payload => {
  return dispatch =>
    dispatch({
      type: AUTH_ACTION_TYPES.SET_ALL_USER,
      payload,
    });
};

export const UpdateAllUser = payload => {
  return dispatch =>
    dispatch({
      type: AUTH_ACTION_TYPES.UPDATE_ALL_USER,
      payload,
    });
};

export const loginAction = (email, password) => async dispatch => {
  try {
    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    dispatch(setAppLoading(false));
    if (error) {
      throwError(error?.message);
      return false;
    } else {
      const result = await getLoggedInUser(data?.user?.id);
      if (result) {
        return true;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const signUpAction = (email, password, name) => async dispatch => {
  try {
    const {data, error} = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      dispatch(setAppLoading(false));
      throwError(error?.message);
      return false;
    } else {
      const userdata = {
        email,
        password,
        name,
        id: data?.user?.id,
      };

      const {error} = await supabase
        .from(SUPABASE_TABLES.USERS)
        .insert(userdata);
      dispatch(setAppLoading(false));
      if (error) {
        throwError(error?.message);
        return false;
      } else {
        throwSuccess(strings.successfullRegistration);
        const result = await getLoggedInUser(data?.user?.id);
        if (result) {
          return true;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
