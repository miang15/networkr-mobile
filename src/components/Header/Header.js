import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../utils/theme';
import CustomText from '../CustomText/CustomText';
import {strings} from '../../strings/strings';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => navigation.toggleDrawer()}
        name="menu-outline"
        size={24}
        color={theme.black}
      />
      <CustomText textStyle={styles.label} numberOfLines={1}>
        {strings.appName}
      </CustomText>
      <View style={styles.empty} />
    </View>
  );
};

export default Header;
