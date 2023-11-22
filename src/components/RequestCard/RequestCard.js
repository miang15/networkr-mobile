import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomImage from '../CustomImage/CustomImage';
import {Images} from '../../constants/Images';
import {styles} from './styles';
import CustomText from '../CustomText/CustomText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../../utils/theme';

const RequestCard = ({onCheck, onClose, name, desc, photo}) => {
  return (
    <View style={styles.row}>
      <CustomImage
        img={photo ? {uri: photo} : Images.profile}
        customStyle={styles.img}
      />
      <View style={styles.column}>
        <CustomText textStyle={styles.name} numberOfLines={1}>
          {name}
        </CustomText>
        <CustomText textStyle={styles.desc} numberOfLines={2}>
          {desc}
        </CustomText>
      </View>
      <View>
        <AntDesign
          onPress={onCheck}
          style={styles.check}
          name="checkcircleo"
          size={22}
          color={theme.green}
        />
        <AntDesign
          onPress={onClose}
          name="closecircleo"
          size={22}
          color={theme.lightred}
        />
      </View>
    </View>
  );
};

export default RequestCard;
