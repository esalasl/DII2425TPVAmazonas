import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const categorias = [
  {
    tipo: "entrantes",
    comidas: ["Ensalada César", "Pincho de tortilla", "Croquetas"],
  },
  { tipo: "primeros", comidas: ["Paella", "Arroz con pollo", "Lasaña"] },
  { tipo: "segundos", comidas: ["Filete a la plancha", "Salmón ahumado"] },
  { tipo: "bebidas", comidas: ["Coca Cola", "Nestea", "Agua"] },
  { tipo: "postres", comidas: ["Tiramisú", "Tarta de chocolate", "Gelatina"] },
];

export default function MenuComandas({ route, navigation }) {
  const { tipo } = route.params; // Obtén el tipo de comida de los parámetros
  const categoria = categorias.find((c) => c.tipo === tipo); // Busca la categoría correspondiente

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tipo.toUpperCase()}</Text>
      <View style={styles.buttonsContainer}>
        {categoria.comidas.map((comida, index) => (
          <View style={styles.button} key={index}>
            <Button title={comida} />
          </View>
        ))}
      </View>

        {/*Contenedor de botones de OPCIONES*/}
      <View style={styles.opcionesContainer}>
        <View style={styles.button}>
          <Button title="CONTINUAR"></Button>
        </View>
        <View style={styles.button}>
          <Button title="FINALIZAR"></Button>
        </View>
        <View style={styles.button}>
          <Button title="ATRÁS"></Button>
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
  button: {
    margin: 10,
    width: "60%",
    backgroundColor: "pink", 
  },

  opcionesContainer: {
    width :"60%",
    padding :6,
    alignItems : "center",
  }

});
