import {createDrawerNavigator} from '@react-navigation/drawer';
import TabBar from './BottomNavigation';
import CustomDrawerContent from './customDrawer';

import {padding} from '../utils/Layout';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: '60%',
          overflow: 'hidden',
          ...padding(20, 20, 20, 20),
        },
        headerShown: false,
      }}
      initialRouteName="TabBar">
      <Drawer.Screen name="TabBar" component={TabBar} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
