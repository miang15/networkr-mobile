import {StyleSheet} from 'react-native';
import {margin, scaleFont, scaleHeight, scaleSize} from '../../utils/Layout';
import {theme} from '../../utils/theme';

export const styles = StyleSheet.create({
  topview: {
    width: '92%',
    alignSelf: 'center',
    overflow: 'hidden',
    ...margin(3, 0, 5, 0),
  },
  placeholderStyle: {
    color: theme.gray,
  },
  label: {
    color: theme.gray,
    fontSize: scaleFont(16),
  },
  listItemLabelStyle: {
    textTransform: 'capitalize',
    color: theme.black,
  },
  containerview: {
    alignSelf: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: theme.gray,
    borderRadius: 10,
    height: scaleHeight(50),
    overflow: 'hidden',
  },
  dropdown: {
    borderWidth: 0,
  },
  dropdowncontainer: {
    borderColor: theme.gray,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: theme.white,
    ...margin(5, 0, 0, 0),
    zIndex: 1,
  },
  imgview: {
    width: scaleSize(15.15),
    height: scaleSize(9),
    alignItems: 'center',
    overflow: 'hidden',
  },
});
