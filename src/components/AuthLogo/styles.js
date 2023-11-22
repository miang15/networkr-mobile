import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';
import {scaleSize, margin} from '../../utils/Layout';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    ...margin(15, 0, 30, 0),
  },
  imgview: {
    width: scaleSize(100),
    height: scaleSize(100),
    alignItems: 'center',
    backgroundColor: theme.white,
    borderRadius: scaleSize(20),
    padding: scaleSize(15),
  },
  appname: {
    color: theme.white,
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
    textAlign: 'center',
    ...margin(5, 5, 0, 5),
  },
});
