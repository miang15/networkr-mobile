import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {theme} from '../../../utils/theme';
import {
  AuthLogo,
  ConnectWith,
  CustomButton,
  CustomText,
  LinkedInButton,
} from '../../../components';
import {strings} from '../../../strings/strings';

const Start = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topview} />
      <View style={styles.bottomview} />

      <View style={styles.centerview}>
        <AuthLogo />
        <View style={styles.optionsview}>
          <CustomText textStyle={styles.welcome}>{strings.welcome}</CustomText>
          <CustomText textStyle={styles.desc}>
            {strings.welcomedescription}
          </CustomText>
          <CustomButton
            onPress={() => navigation.navigate('Login')}
            title={strings.signin}
          />
          <CustomButton
            onPress={() => navigation.navigate('SignUp')}
            title={strings.signup}
            customStyle={styles.signup}
            customLabelStyle={{color: theme.primary}}
          />
          <ConnectWith />
          <LinkedInButton title={strings.connect} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;
