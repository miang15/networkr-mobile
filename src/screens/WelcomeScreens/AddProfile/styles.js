import {StyleSheet} from 'react-native';
import {margin, padding, scaleFont, scaleHeight} from '../../../utils/Layout';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.lightgray,
  },
  topview: {
    backgroundColor: theme.white,
    ...margin(10, 0, 10, 0),
    ...padding(10, 0, 20, 0),
  },
  photo: {
    alignSelf: 'center',
  },
  education: {
    fontSize: scaleFont(20),
    fontWeight: 'bold',
    color: theme.primary,
    ...margin(10, 20, 5, 20),
  },
  about: {
    height: null,
    textAlignVertical: 'top',
    ...padding(5, 5, 5, 5),
  },
});
