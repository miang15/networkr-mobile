import {ScrollView, Modal, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../utils/theme';
import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';
import MonthPicker from 'react-native-month-year-picker';
import LabelInput from '../LabelInput/LabelInput';
import {CheckBox} from 'react-native-elements';
import {strings} from '../../strings/strings';

const CustomModal = ({
  modalVisible,
  onSave,
  onCross,
  setModalVisible,
  heading,
  children,
  input1,
  onChangeInput1,
  input2,
  onChangeInput2,
  label1,
  label2,
  placeholder1,
  error1,
  placeholder2,
  error2,
  startdate,
  onStartDate,
  startdateError,
  endDateError,
  checked,
  onCheck,
  enddate,
  onEndDate,
  showstartpicker,
  showendpicker,
  onChangeStartDate,
  onChangeEndDate,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={setModalVisible}>
      <View style={styles.centeredView}>
        <Entypo
          onPress={onCross}
          style={styles.cross}
          name="cross"
          size={30}
          color={theme.black}
        />
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <CustomText textStyle={styles.heading} numberOfLines={1}>
            {heading}
          </CustomText>

          <LabelInput
            value={input1}
            onChangeText={onChangeInput1}
            rowStyle={styles.row}
            customView={styles.input}
            label={label1}
            placeholder={placeholder1}
            error={error1}
          />
          <LabelInput
            value={input2}
            onChangeText={onChangeInput2}
            rowStyle={styles.row}
            customView={styles.input}
            label={label2}
            placeholder={placeholder2}
            error={error2}
          />
          <LabelInput
            value={startdate}
            onPress={onStartDate}
            disabled={false}
            editable={false}
            rowStyle={styles.row}
            customView={styles.input}
            label={strings.startdate}
            placeholder={strings.startdate}
            error={startdateError}
          />
          <CheckBox
            containerStyle={styles.checkbox}
            textStyle={styles.options}
            activeOpacity={theme.opacity}
            checkedColor={theme.primary}
            title={strings.inprogress}
            checked={checked}
            onPress={onCheck}
          />
          {checked ? null : (
            <LabelInput
              value={enddate}
              onPress={onEndDate}
              disabled={false}
              editable={false}
              rowStyle={styles.row}
              customView={styles.input}
              label={strings.enddate}
              placeholder={strings.enddate}
              error={endDateError}
            />
          )}
          {showstartpicker ? (
            <MonthPicker
              mode="short"
              onChange={onChangeStartDate}
              // onChange={(event, val) => {
              //   setShowstartpicker(false);
              //   const date = moment(val).format('MMM-YYYY');
              //   setstartDate(date.toString());
              // }}
              value={new Date()}
              maximumDate={new Date()}
              locale="en"
            />
          ) : null}
          {showendpicker ? (
            <MonthPicker
              mode="short"
              onChange={onChangeEndDate}
              value={new Date()}
              maximumDate={new Date()}
              locale="en"
            />
          ) : null}
        </ScrollView>
        <CustomButton onPress={onSave} title={'Save'} />
      </View>
    </Modal>
  );
};

export default CustomModal;
