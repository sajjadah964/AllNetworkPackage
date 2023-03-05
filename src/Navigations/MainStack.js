import React from 'react';
import NavigationStrings from '../constants/NavigationStrings';
import {
  FavoriteOffer,
  Home,
  InitialScreen,
  JazzCall,
  JazzHome,
  JazzInternet,
  JazzLocation,
  JazzMsg,
  PackageDetails,
  TelenorCall,
  TelenorHome,
  TelenorInternet,
  TelenorLocation,
  TelenorMsg,
  UfoneCall,
  UfoneHome,
  UfoneInternet,
  UfoneLocation,
  UfoneMsg,
  ZongCall,
  ZongHome,
  ZongInternet,
  ZongLocation,
  ZongMsg,
} from '../Screen';
import MyTabs from './MyTabs';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings.INITIAL_SCREEN}
        component={InitialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationStrings.MY_TABS}
        component={MyTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen name={NavigationStrings.HOME} component={Home}
        options={{ headerShown: false }}
      />

      {/* JAZZ SCREEN */}

      <Stack.Screen name={NavigationStrings.JAZZ_HOME} component={JazzHome}
        options={{
          title: 'Jazz Offers',
          headerStyle: {
            backgroundColor: '#8a0204',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name={NavigationStrings.JAZZ_CALL} component={JazzCall}
        options={{
          title: 'Jazz + Warid Call Offers',
          headerStyle: {
            backgroundColor: '#8a0204',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


      <Stack.Screen name={NavigationStrings.JAZZ_INTERNET} component={JazzInternet}
        options={{
          title: 'Jazz + Warid Internet Offers',
          headerStyle: {
            backgroundColor: '#8a0204',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen name={NavigationStrings.JAZZ_MSG} component={JazzMsg}
        options={{
          title: 'Jazz Msg Offer',
          headerStyle: {
            backgroundColor: '#8a0204',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name={NavigationStrings.JAZZ_LOCATION} component={JazzLocation}
        options={{
          title: 'Jazz Location Based Offer',
          headerStyle: {
            backgroundColor: '#8a0204',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      {/* TELENOR SCREEN  */}

      <Stack.Screen
        name={NavigationStrings.TELENOR_HOME}
        component={TelenorHome}
        options={{
          title: 'Telenor Offers',
          headerStyle: {
            backgroundColor: '#00a9e5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name={NavigationStrings.TELENOR_CALL}
        component={TelenorCall}
        options={{
          title: 'Telenor Call Offers',
          headerStyle: {
            backgroundColor: '#00a9e5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name={NavigationStrings.TELENOR_MSG}
        component={TelenorMsg}
        options={{
          title: 'Telenor Msg Offers',
          headerStyle: {
            backgroundColor: '#00a9e5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name={NavigationStrings.TELENOR_INTERNET}
        component={TelenorInternet}
        options={{
          title: 'Telenor Internet Offers',
          headerStyle: {
            backgroundColor: '#00a9e5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name={NavigationStrings.TELENOR_LOCATION}
        component={TelenorLocation}
        options={{
          title: 'Telenor Location Based Offers',
          headerStyle: {
            backgroundColor: '#00a9e5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      {/* ZONG SCREEN  */}

      <Stack.Screen name={NavigationStrings.ZONG_HOME} component={ZongHome}
        options={{
          title: 'Zong Offers',
          headerStyle: {
            backgroundColor: '#8ec740',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
            <Stack.Screen name={NavigationStrings.ZONG_CALL} component={ZongCall}
        options={{
          title: 'Zong Call Offers',
          headerStyle: {
            backgroundColor: '#8ec740',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
            <Stack.Screen name={NavigationStrings.ZONG_INTERNET} component={ZongInternet}
        options={{
          title: 'Zong Internet Offers',
          headerStyle: {
            backgroundColor: '#8ec740',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
            <Stack.Screen name={NavigationStrings.ZONG_MSG} component={ZongMsg}
        options={{
          title: 'Zong Msg Offers',
          headerStyle: {
            backgroundColor: '#8ec740',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
            <Stack.Screen name={NavigationStrings.ZONG_LOCATION} component={ZongLocation}
        options={{
          title: 'Zong Location Based Offers',
          headerStyle: {
            backgroundColor: '#8ec740',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      {/* UFONE SCREEN  */}

      <Stack.Screen name={NavigationStrings.UFONE_HOME} component={UfoneHome}
        options={{
          title: 'Ufone Offers',
          headerStyle: {
            backgroundColor: '#ff6501',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
         <Stack.Screen name={NavigationStrings.UFONE_CALL} component={UfoneCall}
        options={{
          title: 'Ufone Call Offers',
          headerStyle: {
            backgroundColor: '#ff6501',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
         <Stack.Screen name={NavigationStrings.UFONE_INTERNET} component={UfoneInternet}
        options={{
          title: 'Ufone Internet Offers',
          headerStyle: {
            backgroundColor: '#ff6501',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
         <Stack.Screen name={NavigationStrings.UFONE_MSG} component={UfoneMsg}
        options={{
          title: 'Ufone Msg Offer',
          headerStyle: {
            backgroundColor: '#ff6501',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
         <Stack.Screen name={NavigationStrings.UFONE_LOCATION} component={UfoneLocation}
        options={{
          title: 'Ufone Location Based Offer',
          headerStyle: {
            backgroundColor: '#ff6501',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen name={NavigationStrings.PACKAGE_DETAILS} component={PackageDetails}
        options={{
          title: 'Package Details',
          headerStyle: {
            backgroundColor: '#8a0204',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

<Stack.Screen name={NavigationStrings.FAVORTITE_OFFER} component={FavoriteOffer}
        options={{
          title: 'All Network Favorite Offer',
          headerStyle: {
            backgroundColor: '#6a0019',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </>
  );
}
