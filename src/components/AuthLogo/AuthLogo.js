import {Image, View} from 'react-native';
import React from 'react';
import {Images} from '../../constants/Images';
import {styles} from './styles';
import {theme} from '../../utils/theme';
import CustomText from '../CustomText/CustomText';
import {strings} from '../../strings/strings';

const AuthLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgview}>
        <Image
          style={{...theme.img, tintColor: theme.primary}}
          source={Images.logo}
          resizeMode="contain"
        />
      </View>
      <CustomText textStyle={styles.appname}>{strings.appName}</CustomText>
    </View>
  );
};

export default AuthLogo;
