import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function MenuMesas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>MENU MESAS</Text>
      <View style={styles.button}>
        <Button title="INSERTAR"  />
      </View>
      <View style={styles.button}>
        <Button title="COMPROBAR"  />
      </View>
      <View style={styles.button}>
        <Button title="COBRAR"  />
      </View>
      <View style={styles.button}>
        <Button title="VOLVER" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

export default MenuMesas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 100,
  },
  button: {
    marginBottom: 15,
    width: '80%',
  },
});
