import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
//import MenuMesas from './MenuMesas'; // Importa MenuMesas desde el archivo separado


function PantallaPrincipal({navigation}) {

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>TPV AMAZONAS</Text>
      
      {/* Contenedor de los botones en una cuadrícula de 3x3 */}
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="Mesa 1" onPress={() => navigation.navigate('MenuMesas')} />
        </View>
        <View style={styles.button}>
          <Button title="Mesa 2" onPress={() => navigation.navigate('MenuMesas')} />
        </View>
        <View style={styles.button}>
          <Button title="Mesa 3"onPress={() => navigation.navigate('MenuMesas')} />
        </View>
        <View style={styles.button}>
          <Button title="Mesa 4" onPress={() => navigation.navigate('MenuMesas')} />
        </View>
        <View style={styles.button}>
          <Button title="Mesa 5" onPress={() => navigation.navigate('MenuMesas')} />
        </View>
        <View style={styles.button}>
          <Button title="Mesa 6" onPress={() => navigation.navigate('MenuMesas')} />
        </View>
        <View style={styles.button}>
          <Button title="Mesa 7" onPress={() => navigation.navigate('MenuMesas')} />
        </View>
        <View style={styles.button}>
          <Button title="Mesa 8" onPress={() => navigation.navigate('MenuMesas')} />
        </View>
        <View style={styles.button}>
          <Button title="Mesa 9" onPress={() => navigation.navigate('MenuMesas')} />
        </View>
      </View>
    </View>
  );
}


export default PantallaPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    margin: 10,
    width: '30%',
  },
});