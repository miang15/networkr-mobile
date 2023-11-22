import {StyleSheet} from 'react-native';
import {scaleSize} from '../../utils/Layout';

export const styles = StyleSheet.create({
  imgview: {
    width: scaleSize(45),
    height: scaleSize(45),
    alignItems: 'center',
    overflow: 'hidden',
  },
});
