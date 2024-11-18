import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

//Clases importadas 
import PantallaPrincipal from "./components/PantallaPrincipal";


import menuMesas from "./components/menuMesas";

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.navigator>
        
        </Stack.navigator>
      </NavigationContainer>
    </View>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
