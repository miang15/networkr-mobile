import {StyleSheet} from 'react-native';
import {padding, margin, scaleFont, scaleSize} from '../../utils/Layout';
import {theme} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    ...padding(10, 10, 10, 10),
    backgroundColor: theme.white,
    ...margin(8, 0, 8, 0),
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...margin(5, 0, 5, 0),
  },
  edit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '20%',
    overflow: 'hidden',
  },
  label: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: scaleSize(5),
    ...padding(5, 0, 10, 0),
    overflow: 'hidden',
    ...margin(2, 0, 2, 0),
    borderBottomWidth: 1,
    borderColor: theme.lightgray,
  },
  column: {
    width: '85%',
    overflow: 'hidden',
    ...margin(2, 0, 2, 0),
  },
  heading: {
    fontWeight: 'bold',
    fontSize: scaleFont(17),
    textTransform: 'capitalize',
  },
  title: {
    fontWeight: '500',
    fontSize: scaleFont(15),
    textTransform: 'capitalize',
  },
  duration: {
    color: theme.gray,
    fontSize: scaleFont(14),
  },
  addyour: {
    color: theme.gray,
  },
});
