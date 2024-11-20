import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function PantallaPrincipal({navigation}) {
    return (

        /*Contenedor de la pagina de Insertar*/

      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Elija el tipo de comida</Text>
        
        {/*Contenedor donde van a ir dentro los botones de cada tipo de menú*/}
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="ENTRANTES" onPress={() => navigation.navigate('VistaComandas', {tipo:"entrantes"})} />
          </View>
          <View style={styles.button}>
            <Button title="PRIMEROS" onPress={() => navigation.navigate('VistaComandas', {tipo:"primeros"})} />
          </View>
          <View style={styles.button}>
            <Button title="SEGUNDOS"onPress={() => navigation.navigate('VistaComandas', {tipo:"segundos"})} />
          </View>
          <View style={styles.button}>
            <Button title="BEBIDAS"onPress={() => navigation.navigate('VistaComandas', {tipo:"bebidas"})} />
          </View>
          <View style={styles.button}>
            <Button title="POSTRES"onPress={() => navigation.navigate('VistaComandas', {tipo:"postres"})} />
          </View>
          
          </View>
          </View>
    )
}
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
      flexDirection: 'column',
      alignItems : 'center',
      width: '100%',
    },

    button: {
      margin: 10,
      width: '30%',
      backgroundColor:"#8000FF",
    },
  });