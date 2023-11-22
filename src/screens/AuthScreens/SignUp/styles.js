import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';
import {scaleSize, padding, margin, scaleFont} from '../../../utils/Layout';

const ACTUAL_SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
  },
  optionsview: {
    flex: 1,
    backgroundColor: theme.white,
    width: ACTUAL_SCREEN_WIDTH,
    borderTopLeftRadius: scaleSize(20),
    borderTopRightRadius: scaleSize(20),
    ...padding(20, 15, 30, 15),
    alignSelf: 'center',
  },
  signin: {
    fontSize: scaleFont(16),
    fontWeight: '700',
    ...margin(0, 0, 5, 0),
    textAlign: 'center',
  },
  loginbutton: {
    ...margin(15, 0, 10, 0),
  },
});
