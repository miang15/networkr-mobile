import {StyleSheet} from 'react-native';
import {padding, margin, scaleFont} from '../../../utils/Layout';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    ...margin(10, 0, 0, 0),
    backgroundColor: theme.white,
  },
  label: {
    color: theme.primary,
    fontSize: scaleFont(16),
    width: '50%',
    ...padding(10, 0, 10, 10),
    fontWeight: 'bold',
  },
  selectedlabel: {
    color: theme.white,
    fontSize: scaleFont(16),
    fontWeight: 'bold',
    width: '50%',
    ...padding(10, 0, 10, 10),
    borderBottomWidth: 1,
    borderColor: theme.white,
    backgroundColor: theme.primary,
  },
  list: {
    ...margin(10, 10, 0, 10),
  },
  norequest: {
    alignSelf: 'center',
    ...margin(30, 10, 0, 10),
    color: theme.black,
  },
});
