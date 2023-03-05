import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationStrings from '../constants/NavigationStrings';
import { Home, JazzHome, } from '../Screen';
import CustomDrawer from '../components/CustomDrawer';
const HomeDrawer = createDrawerNavigator();
const MyTabs = () => {
  return (
    <HomeDrawer.Navigator
      initialRouteName={NavigationStrings.HOME}
      drawerContent={props => <CustomDrawer {...props} /> }
      screenOptions={{
        headerShown: false,
      }}>
      <HomeDrawer.Screen
        name={NavigationStrings.HOME}
        component={Home}
        // title="Home"
        // options={{ title: 'My home' }}
        screenOptions={{ headerShown: false }}
      />
    </HomeDrawer.Navigator>
  );
};

export default MyTabs;
