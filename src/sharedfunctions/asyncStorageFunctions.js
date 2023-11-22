import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalStorage = async (key, value) => {
  return await AsyncStorage.setItem(key, value);
};

export const removeLocalStorage = async key => {
  return await AsyncStorage.removeItem(key);
};

export const clearLocalStorage = async () => {
  return await AsyncStorage.clear();
};

export const getLocalStorage = async key => {
  return await AsyncStorage.getItem(key);
};

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER_DATA: 'user_data',
};
