import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';
import {
  margin,
  scaleFont,
  scaleHeight,
  scaleWidth,
} from '../../../utils/Layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  photo: {
    alignSelf: 'center',
    ...margin(30, 10, 10, 10),
  },
  row: {
    backgroundColor: theme.offwhite,
    borderWidth: 0.5,
    borderColor: theme.lightgray,
    borderRadius: 3,
  },
  error: {
    color: theme.red,
    fontSize: scaleFont(13),
    ...margin(0, 20, 0, 10),
  },
  label: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
  },
  lookingfor: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    ...margin(20, 10, 20, 10),
  },
  goodat: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    ...margin(20, 10, 10, 10),
  },
  options: {
    color: theme.black,
    fontWeight: '500',
    fontSize: scaleFont(15),
  },
  input: {
    width: '100%',
    ...margin(12, 0, 12, 0),
  },
  swiperview: {
    height: scaleHeight(620),
    overflow: 'hidden',
  },
  next: {
    width: scaleWidth(300),
  },
  left: {
    ...margin(15, 0, 0, 5),
  },
  heading: {
    color: theme.black,
    fontSize: scaleFont(18),
    ...margin(10, 0, 5, 10),
    fontWeight: 'bold',
  },
  checkbox: {
    ...margin(5, 0, 0, 0),
  },
});
