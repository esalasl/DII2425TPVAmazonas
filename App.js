import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaPrincipal from './components/PantallaPrincipal';
import MenuMesas from './components/MenuMesas';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaPrincipal">
        <Stack.Screen 
          name="PantallaPrincipal" 
          component={PantallaPrincipal} 
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen 
          name="MenuMesas" 
          component={MenuMesas} 
          options={{ title: 'Menú Mesas'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

