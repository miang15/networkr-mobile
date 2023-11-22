import {StyleSheet} from 'react-native';
import {padding, margin, scaleSize, scaleFont} from '../../utils/Layout';
import {theme} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    alignSelf: 'flex-start',
    width: scaleSize(190),
    height: scaleSize(250),
    ...margin(5, 5, 5, 5),
    borderRadius: scaleSize(8),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  hide: {
    ...margin(20, 8, 3, 3),
  },
  cross: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignSelf: 'flex-end',
    ...margin(10, 8, 3, 3),
    borderRadius: scaleSize(30),
  },
  profile: {
    width: scaleSize(80),
    height: scaleSize(80),
    alignSelf: 'center',
    overflow: 'hidden',
  },
  name: {
    color: theme.black,
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    ...margin(10, 5, 5, 5),
    textTransform: 'capitalize',
  },
  desc: {
    color: theme.gray,
    fontSize: scaleFont(16),
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    ...margin(0, 5, 5, 5),
    textTransform: 'capitalize',
  },
  connect: {
    width: '80%',
    ...margin(5, 0, 0, 0),
    position: 'absolute',
    bottom: scaleSize(10),
  },
  label: {
    textTransform: 'capitalize',
  },
});
