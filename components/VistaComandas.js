import React, { useState } from "react";
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
  const { tipo } = route.params;
  const categoria = categorias.find((c) => c.tipo === tipo);

  const [selectedComida, setSelectedComida] = useState(null); // Estado inicial para comida seleccionada
  const [cantidad, setCantidad] = useState(0); // Estado inicial para cantidad que es 0 

  const handlePressComida = (comida) => {
    if (selectedComida === comida) {
      setSelectedComida(null);
      setCantidad(0);
    } else { /*cuando lo presiona se llama a los botones de los lados (+ y -), y la cantidad inicial es 1*/
      setSelectedComida(comida);
      setCantidad(1);
    }
  };

  /*variables 
  incrementar cantidad prev + 1
  decrementar cantidad, si prev es menor que 0 o cuando este en 0 se le resta, que siempre ponga 0 y no salgan numeros negativos
  */
  const incrementarCantidad = () => setCantidad((prev) => prev + 1);
  const decrementarCantidad = () => setCantidad((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>{tipo.toUpperCase()}</Text>

      {/* Comidas */}
      <View style={styles.buttonsContainer}>
        {categoria.comidas.map((comida, index) => (
          <View key={index} style={styles.comidaContainer}>
            <View style={styles.row}>
              {/* Botón de Decrementar */}
              {selectedComida === comida.nombre && (
                <Pressable style={[styles.circleButton, styles.decrementButton]} onPress={decrementarCantidad}>
                  <Text style={styles.symbol}>−</Text>
                </Pressable>
              )}
              {/* Botón de comida */}
              <Pressable
                style={[
                  styles.button,
                  selectedComida === comida.nombre && styles.selectedButton,
                ]}
                onPress={() => handlePressComida(comida.nombre)}
              >
                <Image style={styles.img} source={{ uri: comida.imagen }} />
                <Text style={styles.comidaNombre}>{comida.nombre}</Text>
                {selectedComida === comida.nombre && (
                  <Text style={styles.cantidad}>{cantidad}</Text>
                )}
              </Pressable>
              {/* Botón de Incrementar */}
              {selectedComida === comida.nombre && (
                <Pressable style={[styles.circleButton, styles.incrementButton]} onPress={incrementarCantidad}>
                  <Text style={styles.symbol}>+</Text>
                </Pressable>
              )}
            </View>
          </View>
        ))}
      </View>

      {/* Botones de CONTINUAR, FINALIZAR y ATRÁS */}
      <View>
        <View style={styles.rowButtons}>
          <View style={styles.actionButton}>
            <Button title="CONTINUAR" />
          </View>
          <View style={styles.actionButton}>
            <Button title="FINALIZAR" />
          </View>
        </View>
        <View style={styles.buttonAtras}>
          <Button title="ATRÁS" onPress={() => navigation.goBack()} />
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
    width: "100%",
  },
  comidaContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 120,
    height: 80,
    backgroundColor: "#DEB7D9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  selectedButton: {
    backgroundColor: "#D4A5D5",
  },
  img: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  comidaNombre: {
    fontSize: 14,
    textAlign: "center",
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  incrementButton: {
    backgroundColor: "#4CAF50", // Verde para el botón de incrementar
  },
  decrementButton: {
    backgroundColor: "#F44336", // Rojo para el botón de decrementar
  },
  symbol: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  cantidad: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%", // Ajusta el tamaño
    marginTop: 20,
  },
  actionButton: {
    margin: 10,
    width: "40%",
  },
  buttonAtras: {
    margin: 10,
    marginTop: 20,
  },
});