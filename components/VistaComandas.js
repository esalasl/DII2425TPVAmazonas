import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Button } from "react-native-elements";

const categorias = [
  {
    tipo: "entrantes",
    comidas: [
      {nombre: "Ensalada César", imagen:"https://img.icons8.com/?size=100&id=ovjvLoLpBykl&format=png&color=000000" },
      {nombre: "Pincho de tortilla", imagen:"https://img.icons8.com/?size=100&id=May0vAobhVtB&format=png&color=000000" } ,
      {nombre: "Empanadas", imagen:"https://img.icons8.com/?size=100&id=itlHIhffhxAJ&format=png&color=000000"},
     ],
  },
  { tipo: "primeros",
     comidas: [
      {nombre:"Paella", imagen: "https://img.icons8.com/?size=100&id=36786&format=png&color=000000"}, 
      {nombre:"Arroz con pollo", imagen:"https://img.icons8.com/?size=100&id=r5NZ8ADZLAWG&format=png&color=000000" },
      {nombre:"Lasaña", imagen: "https://img.icons8.com/?size=100&id=kaQDX8EXfZH8&format=png&color=000000"},
     ], 
    },
  { tipo: "segundos", 
    comidas: [
      {nombre: "Entrecot a la plancha", imagen: "https://img.icons8.com/?size=100&id=70440&format=png&color=000000"}, 
      {nombre:"Salmón con verduras", imagen: "https://img.icons8.com/?size=100&id=jXMwwR314xtQ&format=png&color=000000"},
    ], 
  },
  { tipo: "bebidas", 
    comidas: [
      {nombre: "Coca Cola", imagen: "https://img.icons8.com/?size=100&id=97441&format=png&color=000000"},
      {nombre: "Limonada", imagen: "https://img.icons8.com/?size=100&id=StrtrK0p6kzi&format=png&color=000000"},
      {nombre: "Agua", imagen:"https://img.icons8.com/?size=100&id=13322&format=png&color=000000" },
    ], 
  },
  { tipo: "postres", 
    comidas: [
      {nombre: "Tiramisú", imagen:"https://img.icons8.com/?size=100&id=2uSTQpoCKcV7&format=png&color=000000"}, 
      {nombre: "Tarta de chocolate", imagen:"https://img.icons8.com/?size=100&id=kQjVO0obMmFg&format=png&color=000000"},
      {nombre: "Gelatina" , imagen:"https://img.icons8.com/?size=100&id=HjjoBYCQPCDS&format=png&color=000000"},
    ], 
  },
];

export default function MenuComandas({ route, navigation }) {
  const { tipo } = route.params; // Obtén el tipo de comida de los parámetros
  const categoria = categorias.find((c) => c.tipo === tipo); // Busca la categoría correspondiente
 
  const handlePressComida = (comida) => {
    console.log("comida", comida)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tipo.toUpperCase()}</Text>
      <View style={styles.buttonsContainer}>
        {categoria.comidas.map((comida, index) => (
          <Pressable style={styles.button} key={index} onPress={() => handlePressComida(comida.nombre)}>
            <Image style={styles.img} source={{ uri: comida.imagen}}/>{/* src sirve para leer el url de las imagenes*/ }
            <Text style={styles.comidaNombre}> {comida.nombre}</Text>
          </Pressable>
        ))}
      </View>

        {/*Contenedor de botones de OPCIONES*/}
      <View>
        <View style={styles.rowButtons}>
        <View style={styles.button}>
          <Button title="CONTINUAR"></Button>
        </View>
        <View style={styles.button}>
          <Button title="FINALIZAR"></Button>
        </View>
        </View>
        <View style={styles.buttonAtras}>
          <Button title="ATRÁS" onPress={() => navigation.goBack()}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",

  },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%", // ajusta el tamaño 
  },
  button: {
    margin: 10,
    width: "60%", 
    backgroundColor: "#DEB7D9",
    borderRadius: 5,

  },
  buttonAtras:{
    margin:10,
    marginTop: 20,
    
  },
  img: {
    width: 60, // Ajusta el tamaño de la imagen
    height: 60, // Ajusta el tamaño de la imagen
    marginRight: 10, // Espacio entre la imagen y el 
    alignSelf:"center",
  },

  comidaNombre: {
    textAlign: "center", // Centra el texto horizontalmente
    fontSize: 18, // Ajusta el tamaño del texto
    marginTop: 5, // Añade un pequeño margen arriba del texto
  },
});
