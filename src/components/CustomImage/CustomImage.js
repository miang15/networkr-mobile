import {Image, View} from 'react-native';
import React from 'react';
import {Images} from '../../constants/Images';
import {theme} from '../../utils/theme';
import {styles} from './styles';

const CustomImage = ({tintColor, img, customStyle}) => {
  return (
    <View style={[styles.imgview, customStyle]}>
      {img ? (
        <Image
          source={img}
          resizeMode="cover"
          style={{...theme.img, tintColor: tintColor || null}}
        />
      ) : null}
    </View>
  );
};

export default CustomImage;
