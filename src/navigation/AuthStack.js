import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp, Splash, Start} from '../screens';

export const AuthStack = () => {
  const AuthStackScreens = createNativeStackNavigator();

  return (
    <AuthStackScreens.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <AuthStackScreens.Screen name="Splash" component={Splash} />
      <AuthStackScreens.Screen name="Start" component={Start} />
      <AuthStackScreens.Screen name="Login" component={Login} />
      <AuthStackScreens.Screen name="SignUp" component={SignUp} />
    </AuthStackScreens.Navigator>
  );
};
