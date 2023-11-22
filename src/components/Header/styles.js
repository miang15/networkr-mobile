import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';
import {padding, margin, scaleFont} from '../../utils/Layout';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...padding(10, 10, 10, 10),
  },
  label: {
    color: theme.primary,
    fontWeight: 'bold',
    fontSize: scaleFont(17),
    textTransform: 'uppercase',
  },
  empty: {
    width: '3%',
  },
});
