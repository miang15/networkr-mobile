import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import MainStack from './src/navigation/MainStack';
import {theme} from './src/utils/theme';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {CustomToast, Loader} from './src/components';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={theme.primary} barStyle={'light-content'} />
      <MainStack />
      <CustomToast />
      <Loader />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
