import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, View } from 'react-native';
import FormularioProducto from '../componentes/FormularioProducto';
import { estilosGlobales } from '../estilos/estilos';
import { crearProducto } from '../servicios/api';
import { Producto } from '../tipos/Producto';
export default function CrearProducto() {
  const navigation = useNavigation();

  const handleCrear = (producto: Producto) => {
    crearProducto(producto).then(() => {
      Alert.alert('Producto creado');
      navigation.goBack();
    });
  };

  return (
  <View style={estilosGlobales.pantalla}>
    <FormularioProducto onSubmit={handleCrear} />;
  </View>
  )
}
