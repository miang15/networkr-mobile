import {StyleSheet} from 'react-native';
import {
  scaleSize,
  padding,
  margin,
  scaleHeight,
  scaleWidth,
} from '../../utils/Layout';
import {theme} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    ...margin(5, 5, 5, 5),
  },
  photoview: {
    width: scaleSize(100),
    height: scaleSize(100),
    borderWidth: 2,
    borderRadius: scaleSize(100),
    borderColor: theme.primary,
    backgroundColor: theme.white,
    overflow: 'hidden',
  },
  camera: {
    position: 'absolute',
    bottom: scaleHeight(-10),
    alignSelf: 'center',
    backgroundColor: theme.primary,
    padding: 5,
    borderRadius: scaleSize(20),
  },
});
