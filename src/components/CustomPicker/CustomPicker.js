import {View, Image} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import Images from '../../constants/Images';
import CustomText from '../CustomText/CustomText';
import {theme} from '../../utils/theme';

const CustomPicker = ({
  placeholder,
  customContainer,
  customDropDown,
  data,
  setdata,
  height,
  title,
  setPickerValue,
  pickervalue,
  selectItem,
  label,
  disabled,
  multiple,
  selectedText,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <View style={[styles.topview, customContainer]}>
      {label ? <CustomText textStyle={styles.label}>{label}</CustomText> : null}
      <DropDownPicker
        {...rest}
        multiple={multiple}
        maxHeight={height}
        open={open}
        disabled={disabled}
        value={pickervalue}
        multipleText={selectedText}
        placeholder={placeholder}
        placeholderStyle={styles.placeholderStyle}
        items={data}
        listItemLabelStyle={styles.listItemLabelStyle}
        setOpen={setOpen}
        setValue={setPickerValue}
        setItems={setdata}
        onSelectItem={selectItem}
        containerStyle={styles.containerview}
        style={styles.dropdown}
        listMode="MODAL"
        modalTitle={title}
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        dropDownContainerStyle={[styles.dropdowncontainer, customDropDown]}
        showTickIcon
        ArrowDownIconComponent={() => (
          <AntDesign name="down" size={20} color={theme.black} />
        )}
        TickIconComponent={() => (
          <AntDesign name="checkcircle" color={theme.primary} size={20} />
        )}
      />
    </View>
  );
};

export default CustomPicker;
