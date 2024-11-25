import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PantallaPrincipal({ navigation }) {
    const categorias = [
        { tipo: "entrantes" },
        { tipo: "primeros" },
        { tipo: "segundos" },
        { tipo: "bebidas" },
        { tipo: "postres" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Elija el tipo de comida</Text>
            <View style={styles.buttonsContainer}>
                {categorias.map((categoria, index) => (
                    <View style={styles.button} key={index}>
                        <Button
                            title={categoria.tipo.toUpperCase()}
                            onPress={() => navigation.navigate('VistaComandas', { tipo: categoria.tipo })}
                        />
                    </View>
                ))}
            </View>


        </View>

        


    );
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
        alignItems: 'center',
        width: '100%',
    },
    button: {
        margin: 10,
        width: '60%',
    },
});
