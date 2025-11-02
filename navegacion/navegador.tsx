import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CrearProducto from '../pantallas/CrearProducto';
import DetalleProducto from '../pantallas/DetalleProductos';
import EditarProducto from '../pantallas/EditarProductos';
import EliminarProducto from '../pantallas/EliminarProducto';
import ListaProductos from '../pantallas/ListarProductos';

export type RootStackParamList = {
  Lista: undefined;
  Detalle: { id: number };
  Crear: undefined;
  Editar: { id: number };
  Eliminar: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navegador() {
 return (
  <Stack.Navigator initialRouteName="Lista">
    <Stack.Screen name="Lista" component={ListaProductos} />
    <Stack.Screen name="Detalle" component={DetalleProducto} />
    <Stack.Screen name="Crear" component={CrearProducto} />
    <Stack.Screen name="Editar" component={EditarProducto} />
    <Stack.Screen name="Eliminar" component={EliminarProducto} />
  </Stack.Navigator>
);

}
