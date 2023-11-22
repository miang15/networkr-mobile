import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';
import {padding, margin, scaleFont} from '../../utils/Layout';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: theme.white,
    ...padding(15, 15, 15, 15),
  },
  cross: {
    alignSelf: 'flex-end',
    ...margin(0, 0, 10, 0),
  },
  heading: {
    color: theme.black,
    fontSize: scaleFont(20),
    fontWeight: 'bold',
  },
});
