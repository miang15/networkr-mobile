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
import {setAppLoading} from '../../../redux/AppLoader/appLoaderAction';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../../redux/Auth/authAction';
import {authErrorHandler} from '../../../sharedfunctions/sharedfunctions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [password, setpassword] = useState('');
  const [error, seterror] = useState({type: '', msg: ''});

  const handleSignIn = async () => {
    seterror({type: '', msg: ''});
    const error = await authErrorHandler(email, password);
    if (error) {
      seterror(error);
    } else {
      dispatch(setAppLoading(true));
      const result = await dispatch(loginAction(email, password));
      if (result) {
        navigation.reset({
          index: 0,
          routes: [{name: 'MyDrawer'}],
        });
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
          <CustomText textStyle={styles.signin}>{strings.signin}</CustomText>
          <LabelInput
            label={strings.email}
            placeholder={strings.enteremail}
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
            onPress={handleSignIn}
            title={strings.signin}
            customStyle={styles.loginbutton}
          />
          <CustomText textStyle={styles.forgot}>
            {strings.forgotpassword}
          </CustomText>
          <ConnectWith />
          <LinkedInButton title={strings.signin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
