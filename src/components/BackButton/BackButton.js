import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {theme} from '../../utils/theme';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Ionicons
      onPress={() => navigation.goBack()}
      style={styles.back}
      name="arrow-back"
      size={25}
      color={theme.white}
    />
  );
};

export default BackButton;
