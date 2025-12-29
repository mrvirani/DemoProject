import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {RootStackParamList} from './types';
import WelcomeScreen from '../screens/WelcomeScreen';
import FeaturesScreen from '../screens/FeaturesScreen';
import GetStartedScreen from '../screens/GetStartedScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#0A0E27',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18,
            color: '#0A0E27',
          },
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Features"
          component={FeaturesScreen}
          options={{
            title: 'Features',
          }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{
            title: 'Get Started',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

