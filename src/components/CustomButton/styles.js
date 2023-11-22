import {StyleSheet} from 'react-native';
import {margin, scaleFont} from '../../utils/Layout';
import {theme} from '../../utils/theme';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: '95%',
    backgroundColor: theme.primary,
    ...margin(5, 0, 5, 0),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: theme.primary,
  },
  buttonlabel: {
    color: theme.white,
    fontSize: scaleFont(14),
  },
});
