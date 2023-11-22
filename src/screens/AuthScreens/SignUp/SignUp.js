import {SafeAreaView, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {theme} from '../../../utils/theme';
import {Images} from '../../../constants/Images';
import {strings} from '../../../strings/strings';
import {
  AuthLogo,
  BackButton,
  ConnectWith,
  CustomButton,
  CustomText,
  LabelInput,
  LinkedInButton,
} from '../../../components';
import {authErrorHandler} from '../../../sharedfunctions/sharedfunctions';
import {useDispatch} from 'react-redux';
import {setAppLoading} from '../../../redux/AppLoader/appLoaderAction';
import {signUpAction} from '../../../redux/Auth/authAction';

const SignUp = ({navigation}) => {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const dispatch = useDispatch();
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [password, setpassword] = useState('');
  const [error, seterror] = useState({type: '', msg: ''});

  const handleSignUp = async () => {
    seterror({type: '', msg: ''});

    if (!name.trim()) {
      seterror({type: strings.name, msg: strings.namerequired});
    } else {
      const error = await authErrorHandler(email, password);
      if (error) {
        seterror(error);
      } else {
        dispatch(setAppLoading(true));
        const result = await dispatch(signUpAction(email, password, name));
        if (result) {
          navigation.reset({
            index: 0,
            routes: [{name: 'WelcomeStack', params: {screen: 'Onboarding'}}],
          });
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <AuthLogo />
        <View style={styles.optionsview}>
          <CustomText textStyle={styles.signin}>{strings.signup}</CustomText>
          <LabelInput
            label={strings.name}
            placeholder={strings.entername}
            value={name}
            onChangeText={setname}
            disabled={true}
            error={error?.type == strings.name ? error?.msg : null}
          />
          <LabelInput
            label={strings.email}
            placeholder={strings.enteremail}
            customView={styles.emailfield}
            value={email}
            onChangeText={setemail}
            disabled={true}
            error={error?.type == strings.email ? error?.msg : null}
          />

          <LabelInput
            label={strings.password}
            placeholder={strings.enterpassword}
            disabled={true}
            value={password}
            onChangeText={setpassword}
            Icon={Images.eyeIcon}
            tintColor={secureTextEntry ? theme.gray : theme.primary}
            onIcon={() => setsecureTextEntry(!secureTextEntry)}
            secureTextEntry={secureTextEntry}
            customView={styles.passwordfield}
            error={error?.type == strings.password ? error?.msg : null}
          />

          <CustomButton
            onPress={handleSignUp}
            title={strings.signup}
            customStyle={styles.loginbutton}
          />
          <ConnectWith />
          <LinkedInButton title={strings.signup} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
