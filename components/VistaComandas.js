import React from "react";
import { View, Button, StyleSheet } from 'react-native';

export function MenuComandas({categorias = [], navigation}){ 
return(
    <View style={styles.container}> 
        
      {categorias.map((categoria) => (
        <View key={categoria.tipo} style={styles.button}>
          {/* Genera un botón para cada tipo de comida */}
          <Button
            title={categoria.tipo.toUpperCase()} // Muestra el tipo de comida en el botón
          />

        </View>
      ))}
      <View style={styles.button}>
        <Button title="CONTINUAR"/>
      </View>
      <View style={styles.button}>
        <Button title="FINALIZAR"/>
      </View>
      <View style={styles.button}>
        <Button title="ATRAS" onPress={() => navigation.goBack()}/>
      </View>
    </View>
); 
  
}

export default MenuComandas;

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


//contiene los diferentes arrays
const categorias =[
    {
        //son objetos del array cada objeto representa una categoria de comida
        //Es un String
        tipo:"entrantes",
        //Array de Strings 
        comidas: ["Ensalda Cesar", "Pincho de tortilla", "Croquetas"]
    },
    {
        tipo:"primeros",
        comidas: ["Paella", "Arroz con pollo", "Lasaña"]
    },
    {
        tipo:"segundos",
        comidas: ["Filete a la plancha", "Salmón ahumado"]
    },
    {
        tipo:"bebidas",
        comidas: ["Coca Cola", "Nestea", "Agua"]
    },
    {
        tipo:"postres",
        comidas: ["Tiramisú ", "Tarta de chocolate", "Gelatina"]
    },
]

/*const categorias2 ={
    entrantes: ["a", "b"]
}*/