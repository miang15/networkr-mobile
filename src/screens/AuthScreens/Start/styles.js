import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';
import {scaleSize, padding, margin, scaleFont} from '../../../utils/Layout';

const ACTUAL_SCREEN_WIDTH = Dimensions.get('window').width;
const ACTUAL_SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.lightgray,
    height: ACTUAL_SCREEN_HEIGHT,
    width: ACTUAL_SCREEN_WIDTH,
  },
  topview: {
    flex: 1,
    backgroundColor: theme.primary,
    borderBottomLeftRadius: scaleSize(20),
    borderBottomRightRadius: scaleSize(20),
  },
  bottomview: {
    flex: 1,
    backgroundColor: theme.lightgray,
  },
  centerview: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionsview: {
    backgroundColor: theme.white,
    width: ACTUAL_SCREEN_WIDTH * 0.85,
    borderRadius: scaleSize(20),
    ...padding(25, 15, 30, 15),
    alignItems: 'center',
  },
  welcome: {
    fontSize: scaleFont(14),
    fontWeight: '700',
  },
  desc: {
    color: theme.gray,
    fontSize: scaleFont(14),
    ...margin(3, 5, 30, 5),
  },
  signup: {
    backgroundColor: theme.white,
    borderColor: theme.primary,
    ...margin(10, 0, 5, 0),
  },
});
