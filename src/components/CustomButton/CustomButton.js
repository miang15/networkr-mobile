import React from 'react';
import {Button} from 'react-native-paper';
import {styles} from './styles';

const CustomButton = ({
  customLabelStyle,
  onPress,
  title,
  customStyle,
  ...rest
}) => {
  return (
    <Button
      onPress={onPress}
      style={[styles.button, customStyle]}
      labelStyle={[styles.buttonlabel, customLabelStyle]}
      {...rest}>
      {title}
    </Button>
  );
};

export default CustomButton;
