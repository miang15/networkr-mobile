import {StyleSheet} from 'react-native';
import {
  margin,
  padding,
  scaleFont,
  scaleHeight,
  scaleSize,
} from '../../utils/Layout';
import {theme} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    ...margin(7, 5, 7, 5),
  },
  heading: {
    color: theme.black,
    fontSize: scaleFont(15),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...padding(2, 10, 2, 5),
    borderRadius: 10,
    ...margin(3, 0, 0, 0),
    backgroundColor: theme.lightgray,
  },
  input: {
    paddingVertical: 0,
    height: scaleHeight(40),
    width: '92%',
    color: theme.black,
  },
  imgview: {
    width: scaleSize(20.15),
    height: scaleSize(20),
    alignItems: 'center',
    overflow: 'hidden',
  },
  error: {
    color: theme.red,
    fontSize: scaleFont(13),
    ...margin(3, 0, 3, 0),
  },
});
