import {StyleSheet} from 'react-native';
import {scaleFont, padding, margin, scaleSize} from '../../utils/Layout';
import {theme} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: theme.white,
    ...margin(5, 0, 5, 0),
    ...padding(10, 15, 10, 15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  input: {
    paddingTop: 0,
    fontSize: scaleFont(16),
    justifyContent: 'center',
    paddingBottom: 0,
    width: '90%',
  },
});
