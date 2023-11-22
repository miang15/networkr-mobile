import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  CustomText,
  LabelInput,
  ProfileData,
  ProfilePhoto,
} from '../../../components';
import {styles} from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import {strings} from '../../../strings/strings';
import {theme} from '../../../utils/theme';

const AddProfile = () => {
  const [image, setimage] = useState('');
  const [name, setname] = useState('');
  const [about, setabout] = useState('');
  const [error, seterror] = useState({type: '', msg: ''});

  const handlePickImage = async () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        cropperCircleOverlay: true,
      })
        .then(image => {
          if (image?.path) {
            setimage(image?.path);
          }
        })
        .catch(e => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.topview}>
          <ProfilePhoto
            customView={styles.photo}
            photo={image}
            onPress={handlePickImage}
          />
          <LabelInput
            label={strings.name}
            placeholder={strings.entername}
            value={name}
            onChangeText={setname}
            disabled={true}
            error={error?.type == strings.name ? error?.msg : null}
          />

          <LabelInput
            customInput={styles.about}
            numberOfLines={6}
            multiline={true}
            label={strings.about}
            placeholder={strings.enterabout}
            value={about}
            onChangeText={setabout}
            disabled={true}
            error={error?.type == strings.about ? error?.msg : null}
          />
        </View>
        <ProfileData label={strings.education} tintColor={theme.gray} />
        <ProfileData label={strings.experience} tintColor={theme.gray} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProfile;
