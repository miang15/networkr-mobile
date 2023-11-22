import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddProfile, Onboarding} from '../screens';

export const WelcomeStack = () => {
  const WelcomeStackScreens = createNativeStackNavigator();

  return (
    <WelcomeStackScreens.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Onboarding">
      <WelcomeStackScreens.Screen name="Onboarding" component={Onboarding} />
      <WelcomeStackScreens.Screen name="AddProfile" component={AddProfile} />
    </WelcomeStackScreens.Navigator>
  );
};
