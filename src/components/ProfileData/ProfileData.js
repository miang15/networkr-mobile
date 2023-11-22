import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CustomText from '../CustomText/CustomText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import CustomImage from '../CustomImage/CustomImage';
import {theme} from '../../utils/theme';

const ProfileData = ({
  tintColor,
  label,
  onAdd,
  onEdit,
  img,
  data,
  customStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <CustomText numberOfLines={1} textStyle={styles.label}>
          {label}
        </CustomText>
        {/* <View style={styles.edit}> */}
        <AntDesign
          style={{opacity: 0.6}}
          onPress={onAdd}
          name="plus"
          size={25}
          color={theme.black}
        />
        {/* </View> */}
      </View>
      {data?.length ? (
        data?.map((item, index) => {
          return (
            <View key={index} style={styles.row2}>
              <CustomImage
                tintColor={tintColor}
                img={img}
                customStyle={customStyle}
              />
              <View style={styles.column}>
                <CustomText numberOfLines={1} textStyle={styles.heading}>
                  {item?.heading}
                </CustomText>
                <CustomText numberOfLines={1} textStyle={styles.title}>
                  {item?.description}
                </CustomText>
                <CustomText numberOfLines={1} textStyle={styles.duration}>
                  {item?.duration}
                </CustomText>
              </View>
            </View>
          );
        })
      ) : (
        <CustomText
          numberOfLines={1}
          textStyle={styles.addyour}>{`Add your ${label}`}</CustomText>
      )}
    </View>
  );
};

export default ProfileData;
