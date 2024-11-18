// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaPrincipal from './components/PantallaPrincipal';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaPrincipal">
        <Stack.Screen
          name="PantallaPrincipal"
          component={PantallaPrincipal}
          options={{ title: 'TPV Amazonas' }}
        />
        <Stack.Screen/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
