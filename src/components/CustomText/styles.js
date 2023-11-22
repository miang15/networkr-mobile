import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';
import {scaleFont} from '../../utils/Layout';

export const styles = StyleSheet.create({
  text: {
    color: theme.black,
    fontSize: scaleFont(15),
  },
});
