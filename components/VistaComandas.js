import React, {useState} from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { Button } from "react-native-elements";

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

  /*
  const [isModalVisible, setIsModalVisible] = useState(false); //mdal visible o no
  const [selectedComida, setSelectedComida] = useState(""); // se guarda el nombre del plato que se selecciona
  const [quantity, setQuantity] = useState(1); //cantidad de ese plato

  //Creamos una función para que el Modal se abra cada vez que se pulse el botón de un plato
  const openModal = (comida) => {
    setSelectedComida(comida); // Guardamos el plato seleccionado
    setQuantity(1); // Inicializamos la cantidad en 1
    setIsModalVisible(true); // Mostramos el modal
  };

  const closeModal = () => {
    setIsModalVisible(false); // Ocultamos el modal
  };
*/
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tipo.toUpperCase()}</Text>
      <View style={styles.buttonsContainer}>
        {categoria.comidas.map((comida, index) => (
          <View style={styles.button} key={index}>
            <Button title={comida} />
          </View>
        ))}

       {/* <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
        >
        
        
          <View style={styles.modal}>
            <Text style={styles.modalText}>{selectedComida}</Text>
            <Text style={styles.modalText}>Cantidad: {quantity}</Text>
            <View style={styles.row}>
              Para que el + y - estén uno al lado del otro
              <Button
                title="-"
                onPress={() => setQuantity((q) => Math.max(1, q - 1))}
                q: el valor de quatity, q -1: le resta 1 a la cantidad actual
                Math: garantiza que el valor nunca sea menor que 1, si es así devuelve 1
              />
              <Button title="+" onPress={() => setQuantity((q) => q + 1)} />
            </View>
            <Button title="Cerrar" onPress={closeModal} />
          </View>
        </Modal>
        */}
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
  },
  buttonAtras: {
    margin: 10,
    marginTop: 20,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginBottom: 20,
  },
});
