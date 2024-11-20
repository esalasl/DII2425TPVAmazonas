import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

export function MenuComandas({categorias, navigation}){ 
return categorias.map(categoria =>({   // map es para recorrer el array
    tipo: categoria.tipo,
    boton: <Button>(categoria.tipo)</Button>,
    comida:categoria.comidas
})) 
}
 export default MenuComandas;
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