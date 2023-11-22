import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';
import {scaleSize, margin, padding} from '../../utils/Layout';

export const styles = StyleSheet.create({
  linkedin: {
    backgroundColor: theme.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    width: '95%',
    ...margin(20, 0, 5, 0),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: theme.primary,
    ...padding(5, 15, 5, 15),
    justifyContent: 'center',
  },
  iconview: {
    width: scaleSize(25),
    height: scaleSize(25),
    alignItems: 'center',
    ...margin(1, 15, 1, 0),
  },
});
