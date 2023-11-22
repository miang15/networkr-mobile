import {throwError} from '../../sharedfunctions/handleToastMessage';
import supabase from '../../supabase/service';
import {SUPABASE_TABLES} from '../../supabase/tables';

export const CONNECTS_ACTION_TYPES = {
  SET_PENDING_USER: 'SET_PENDING_USER',
  UPDATE_PENDING_USER: 'UPDATE_PENDING_USER',
  SET_CONNECTED_USER: 'SET_CONNECTED_USER',
  REMOVE_CONNECTED_USER: 'REMOVE_CONNECTED_USER',
};

export const setPendingUser = payload => {
  return dispatch =>
    dispatch({
      type: CONNECTS_ACTION_TYPES.SET_PENDING_USER,
      payload,
    });
};

export const updatePendingUser = payload => {
  return dispatch =>
    dispatch({
      type: CONNECTS_ACTION_TYPES.UPDATE_PENDING_USER,
      payload,
    });
};

export const setConnectedUser = payload => {
  return dispatch =>
    dispatch({
      type: CONNECTS_ACTION_TYPES.SET_CONNECTED_USER,
      payload,
    });
};

export const removeConnectedUser = payload => {
  return dispatch =>
    dispatch({
      type: CONNECTS_ACTION_TYPES.REMOVE_CONNECTED_USER,
      payload,
    });
};

export const acceptRequestAction = (id, user) => async dispatch => {
  try {
    const {error} = await supabase
      .from(SUPABASE_TABLES.MY_NETWORK)
      .update({status: 'connected'})
      .eq('connection_id', id)
      .eq('user_id', user?.id);
    if (error) {
      throwError(error?.message);
      return false;
    } else {
      dispatch(updatePendingUser(id));
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeConnectionAction = (id, user) => async dispatch => {
  try {
    const {error} = await supabase
      .from(SUPABASE_TABLES.MY_NETWORK)
      .delete()
      .eq('connection_id', id)
      .eq('user_id', user?.id);

    if (error) {
      throwError(error?.message);
      return false;
    } else {
      dispatch(removeConnectedUser(id));
    }
  } catch (error) {
    console.log(error);
  }
};
