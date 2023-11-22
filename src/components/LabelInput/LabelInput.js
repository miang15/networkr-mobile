import {TouchableOpacity, Image, TextInput, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {theme} from '../../utils/theme';
import CustomText from '../CustomText/CustomText';

const LabelInput = ({
  customView,
  label,
  value,
  onChangeText,
  keyboardType,
  disabled,
  placeholder,
  onPress,
  Icon,
  editable,
  customInput,
  secureTextEntry,
  tintColor,
  onIcon,
  labelstyle,
  rowStyle,
  error,
  ...rest
}) => {
  return (
    <View style={[styles.container, customView]}>
      <CustomText style={[styles.heading, labelstyle]} numberOfLines={1}>
        {label}
      </CustomText>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.row, rowStyle]}
        disabled={disabled}>
        <TextInput
          {...rest}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={[{...styles.input, width: Icon ? '92%' : '95%'}, customInput]}
          placeholder={placeholder}
          placeholderTextColor={theme.gray}
          editable={editable}
          secureTextEntry={secureTextEntry}
        />
        {Icon ? (
          <TouchableOpacity
            accessibilityLabel="secure-text-toggle"
            onPress={onIcon}
            activeOpacity={theme.opacity}>
            <Image
              source={Icon}
              style={{tintColor: tintColor}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
      {error ? <CustomText textStyle={styles.error}>{error}</CustomText> : null}
    </View>
  );
};

export default LabelInput;
