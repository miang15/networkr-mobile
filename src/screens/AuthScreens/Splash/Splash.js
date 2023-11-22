import {View} from 'react-native';
import React, {useEffect} from 'react';
import {AuthLogo} from '../../../components';
import {styles} from './styles';
import {getLoggedInUser} from '../../../sharedfunctions/supabaseHandler';
import supabase from '../../../supabase/service';
import SplashScreen from 'react-native-splash-screen';

const Splash = ({navigation}) => {
  const handleSession = async session => {
    if (session !== null && session !== undefined) {
      const result = await getLoggedInUser(session?.user?.id);
      if (result) {
        SplashScreen.hide();
        navigation.reset({
          index: 0,
          routes: [{name: 'MyDrawer'}],
        });
      }
    } else {
      SplashScreen.hide();
      navigation.replace('Start');
    }
  };

  useEffect(() => {
    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return <></>;
};

export default Splash;
