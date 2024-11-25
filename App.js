import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*importanmos las distintas clases*/
import PantallaPrincipal from './components/PantallaPrincipal';
import MenuMesas from './components/MenuMesas';
import Insertar from './components/Insertar';
import VistaComandas from './components/VistaComandas';


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

        <Stack.Screen 
          name="Insertar" 
          component={Insertar} 
          options={{ title: 'Tipos de platos'}}
        />


         <Stack.Screen 
          name="VistaComandas" 
          component={VistaComandas} 
          options={{ title: 'Platos'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

