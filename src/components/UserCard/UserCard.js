import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../utils/theme';
import CustomImage from '../CustomImage/CustomImage';
import {Images} from '../../constants/Images';
import CustomText from '../CustomText/CustomText';
import CustomButton from '../CustomButton/CustomButton';
import {strings} from '../../strings/strings';

const UserCard = ({
  onClose,
  photo,
  name,
  title,
  onButtonPress,
  ButtonLabel,
  onCardPress,
  hideCross,
}) => {
  return (
    <TouchableOpacity
      onPress={onCardPress}
      activeOpacity={theme.opacity}
      style={styles.container}>
      {hideCross ? (
        <View style={styles.hide} />
      ) : (
        <TouchableOpacity
          onPress={onClose}
          style={styles.cross}
          activeOpacity={theme.opacity}>
          <Entypo name="cross" size={22} color={theme.white} />
        </TouchableOpacity>
      )}
      <CustomImage
        img={photo ? {uri: photo} : Images.profile}
        customStyle={styles.profile}
      />
      <CustomText textStyle={styles.name} numberOfLines={1}>
        {name}
      </CustomText>
      <CustomText textStyle={styles.desc} numberOfLines={2}>
        {title}
      </CustomText>
      <CustomButton
        onPress={onButtonPress}
        customStyle={styles.connect}
        customLabelStyle={styles.label}
        title={ButtonLabel}
      />
    </TouchableOpacity>
  );
};

export default UserCard;
