import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../constants/Images';
import {theme} from '../../utils/theme';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfilePhoto = ({customView, editStyle, photo, onPress}) => {
  return (
    <View style={[styles.container, customView]}>
      <View style={styles.photoview}>
        <Image
          source={photo ? {uri: photo} : Images.profile}
          resizeMode="cover"
          style={theme.img}
        />
      </View>
      <Entypo
        onPress={onPress}
        name="edit"
        size={15}
        color={theme.white}
        style={[styles.camera, editStyle]}
      />
    </View>
  );
};

export default ProfilePhoto;
