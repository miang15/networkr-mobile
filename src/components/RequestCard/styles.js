import {StyleSheet} from 'react-native';
import {padding, margin, scaleSize, scaleFont} from '../../utils/Layout';
import {theme} from '../../utils/theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...padding(15, 20, 15, 20),
    backgroundColor: theme.white,
    ...margin(5, 0, 5, 0),
    borderRadius: scaleSize(8),
  },
  img: {
    width: scaleSize(50),
    height: scaleSize(50),
    overflow: 'hidden',
  },
  check: {
    ...margin(0, 0, 10, 0),
  },
  column: {
    width: '70%',
    overflow: 'hidden',
  },
  name: {
    color: theme.black,
    fontWeight: 'bold',
    fontSize: scaleFont(16),
  },
  desc: {
    color: theme.gray,
    fontSize: scaleFont(15),
  },
});
