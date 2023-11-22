import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {CustomText} from '../components';
import {margin, scaleFont} from '../utils/Layout';
import {StyleSheet} from 'react-native';

import {strings} from '../strings/strings';
import supabase from '../supabase/service';
import {throwError} from '../sharedfunctions/handleToastMessage';
import {useDispatch} from 'react-redux';
import {resetState} from '../redux/AppLoader/appLoaderAction';

const CustomDrawerContent = ({...props}) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      return throwError(error?.message);
    }

    dispatch(resetState());
    props.navigation.reset({
      index: 0,
      routes: [{name: 'AuthStack'}],
    });
  };

  return (
    <DrawerContentScrollView
      style={{flex: 1}}
      {...props}
      contentContainerStyle={{
        flex: 1,
      }}>
      <CustomText textStyle={styles.label}>{strings.about}</CustomText>
      <CustomText onPress={handleLogout} textStyle={styles.label}>
        {strings.logout}
      </CustomText>
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;

const styles = StyleSheet.create({
  label: {
    fontSize: scaleFont(18),
    ...margin(3, 0, 10, 0),
  },
});
