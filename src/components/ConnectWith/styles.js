import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';
import {margin, scaleFont} from '../../utils/Layout';

export const styles = StyleSheet.create({
  line: {
    borderWidth: 0.5,
    borderColor: theme.lightgray,
    width: '45%',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    ...margin(15, 0, 0, 0),
  },
  or: {
    ...margin(0, 10, 5, 10),
    fontSize: scaleFont(16),
    color: theme.black,
  },
});
