import React from 'react'
import {
  Image
} from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  HomeScreen,
  VerificationScreen,
  VerificationStatusScreen
} from '../screens/'


const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};
function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
        />
        <Stack.Screen
          name="VerificationStatus"
          component={VerificationStatusScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;