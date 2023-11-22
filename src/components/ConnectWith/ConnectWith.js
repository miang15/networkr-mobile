import {View} from 'react-native';
import React from 'react';
import CustomText from '../CustomText/CustomText';
import {styles} from './styles';
import {strings} from '../../strings/strings';

const ConnectWith = () => {
  return (
    <View style={styles.bottom}>
      <View style={styles.line} />
      <CustomText textStyle={styles.or}>{strings.or}</CustomText>
      <View style={styles.line} />
    </View>
  );
};

export default ConnectWith;
