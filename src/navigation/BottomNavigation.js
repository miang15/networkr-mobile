import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomImage} from '../components';
import {Images} from '../constants/Images';
import {theme} from '../utils/theme';
import {StyleSheet} from 'react-native';
import {scaleHeight, scaleSize} from '../utils/Layout';
import {AllUsers, Connections} from '../screens';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.primarlight,
        tabBarActiveBackgroundColor: theme.white,
        tabBarInactiveBackgroundColor: theme.white,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: null,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {...styles.label},
        tabBarStyle: {
          height: scaleHeight(55),
          // paddingVertical: 8,
        },
      }}
      initialRouteName="AllUsers">
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <CustomImage
              img={Images.logo}
              tintColor={color}
              customStyle={styles.icon}
            />
          ),
        }}
        name="AllUsers"
        component={AllUsers}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Connections',
          tabBarIcon: ({focused, color}) => (
            <FontAwesome5 name="user-friends" size={24} color={color} />
          ),
        }}
        name="Connections"
        component={Connections}
      />
    </Tab.Navigator>
  );
};
export default TabBar;

const styles = StyleSheet.create({
  icon: {
    width: scaleSize(32),
    height: scaleSize(32),
  },
  label: {
    fontSize: scaleSize(8),
  },
});
