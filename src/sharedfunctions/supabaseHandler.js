import {setAppLoading} from '../redux/AppLoader/appLoaderAction';
import {UpdateAllUser, setAllUser, setUser} from '../redux/Auth/authAction';
import {
  setConnectedUser,
  setPendingUser,
} from '../redux/Connects/connectsAction';
import {store} from '../redux/store';
import supabase from '../supabase/service';
import {SUPABASE_TABLES} from '../supabase/tables';
import {throwError} from './handleToastMessage';
import {decode} from 'base64-arraybuffer';

export const getLoggedInUser = async id => {
  try {
    const {data, error} = await supabase
      .from(SUPABASE_TABLES.USERS)
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      throwError(error?.message);
      return false;
    }
    store.dispatch(setUser(data));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAllUsers = async user => {
  try {
    const {data, error} = await supabase
      .from(SUPABASE_TABLES.USERS)
      .select()
      .neq('id', user?.id);
    if (error) {
      throwError(error?.message);
      return false;
    }
    if (data?.length) {
      const {data: hiddenUser, error} = await supabase
        .from(SUPABASE_TABLES.HIDDEN_SUGGESTIONS)
        .select()
        .eq('user_id', user?.id);
      if (error) {
        throwError(error?.message);
        return false;
      }

      let listData = [...data];
      if (hiddenUser?.length) {
        const idsToRemove = hiddenUser?.map(item => item?.hidden_id);
        listData = data?.filter(item => !idsToRemove.includes(item?.id));
      }

      const {data: mynetworkdata, error: err} = await supabase
        .from(SUPABASE_TABLES.MY_NETWORK)
        .select()
        .eq('user_id', user?.id);
      if (err) {
        throwError(error?.message);
        return false;
      }

      if (mynetworkdata?.length) {
        const idsToRemove = mynetworkdata?.map(item => item?.connection_id);
        listData = listData?.filter(item => !idsToRemove.includes(item?.id));
      }

      const filteredData = listData?.filter(item => {
        const userSkills = item?.skills;
        const matchingSkills = user?.skills?.filter(skill =>
          userSkills?.includes(skill),
        );
        return matchingSkills?.length >= 2;
      });
      store.dispatch(setAllUser(filteredData));
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getMyNetworkData = async (status, user) => {
  try {
    const {data, error} = await supabase
      .from(SUPABASE_TABLES.MY_NETWORK)
      .select('connection_id')
      .eq('user_id', user?.id)
      .eq('status', status);
    if (error) {
      store.dispatch(setAppLoading(false));
      throwError(error?.message);
      return false;
    } else {
      if (data?.length) {
        const allIds = data?.map(item => item?.connection_id);

        const {data: matchedData, error} = await supabase
          .from(SUPABASE_TABLES.USERS)
          .select()
          .in('id', allIds);

        if (error) {
          store.dispatch(setAppLoading(false));
          throwError(error?.message);
          return false;
        } else {
          store.dispatch(setAppLoading(false));
          if (matchedData?.length) {
            if (status == 'pending') {
              store.dispatch(setPendingUser(matchedData));
            } else {
              store.dispatch(setConnectedUser(matchedData));
            }
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const handleDismissUser = async (id, user) => {
  try {
    const {error} = await supabase
      .from(SUPABASE_TABLES.HIDDEN_SUGGESTIONS)
      .insert({hidden_id: id, user_id: user?.id});
    if (error) {
      return throwError(error?.message);
    } else {
      store.dispatch(UpdateAllUser(id));
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleAddRequest = async (id, user) => {
  try {
    const {error} = await supabase
      .from(SUPABASE_TABLES.MY_NETWORK)
      .insert({user_id: user?.id, connection_id: id, status: 'pending'});
    if (error) {
      return throwError(error?.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleUploadImage = async payload => {
  const {imagedata, base64Image, user} = payload;

  const {data, error: err} = await supabase.storage.getBucket(
    SUPABASE_TABLES.PHOTOS_BUCKET,
  );
  if (err) {
    const {data, error} = await supabase.storage.createBucket(
      SUPABASE_TABLES.PHOTOS_BUCKET,
      {
        public: true,
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg'],
      },
    );
    if (error) {
      dispatch(setAppLoading(false));
      throwError(error?.message);
      return false;
    } else {
      const {data, error} = await supabase.storage
        .from(SUPABASE_TABLES.PHOTOS_BUCKET)
        .upload(
          `${user?.id}.${imagedata?.mime == 'image/png' ? 'png' : 'jpg'}`,
          base64Image,
          {
            contentType: 'image/png',
            upsert: true,
          },
        );
      if (error) {
        dispatch(setAppLoading(false));
        throwError(error?.message);
        return false;
      }
    }
  } else {
    const {data, error} = await supabase.storage
      .from(SUPABASE_TABLES.PHOTOS_BUCKET)
      .upload(
        `${user?.id}.${imagedata?.mime == 'image/png' ? 'png' : 'jpg'}`,
        base64Image,
        {
          contentType: 'image/png',
          upsert: true,
        },
      );

    if (error) {
      dispatch(setAppLoading(false));
      throwError(error?.message);
      return false;
    } else {
      const {data: url, error: err} = await supabase.storage
        .from(SUPABASE_TABLES.PHOTOS_BUCKET)
        .getPublicUrl(
          `${user?.id}.${imagedata?.mime == 'image/png' ? 'png' : 'jpg'}`,
        );

      if (err) {
        dispatch(setAppLoading(false));
        throwError(err?.message);
        return false;
      }
      return url;
    }
  }
};
