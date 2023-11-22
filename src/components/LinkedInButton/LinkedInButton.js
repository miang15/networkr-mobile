import {TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import {Images} from '../../constants/Images';
import {theme} from '../../utils/theme';
import CustomText from '../CustomText/CustomText';
import {strings} from '../../strings/strings';
import {styles} from './styles';

const LinkedInButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.linkedin}
      activeOpacity={theme.opacity}>
      <View style={styles.iconview}>
        <Image
          source={Images.linkedin}
          resizeMode="cover"
          style={{...theme.img, tintColor: theme.white}}
        />
      </View>
      <CustomText textStyle={{color: theme.white}}>
        {`${title} ${strings.signlinkedIn}`}
      </CustomText>
    </TouchableOpacity>
  );
};

export default LinkedInButton;
