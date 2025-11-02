import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, Text, View } from 'react-native';
import { estilosGlobales } from '../estilos/estilos';
import { RootStackParamList } from '../navegacion/navegador';
import { obtenerProducto } from '../servicios/api';
import { Producto } from '../tipos/Producto';
type Props = {
  route: RouteProp<RootStackParamList, 'Detalle'>;
};

export default function DetalleProducto({ route }: Props) {
  const { id } = route.params;
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargando, setCargando] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    obtenerProducto(id).then(data => {
      setProducto(data);
      setCargando(false);
    });
  }, [id]);

  if (cargando || !producto) return <ActivityIndicator size="large" />;

  return (
    <View style={estilosGlobales.pantalla}>
      <Image source={{ uri: producto.image }} style={{ width: 150, height: 150 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{producto.title}</Text>
      <Text style={{ fontSize: 16 }}>${producto.price}</Text>
      <Text style={{ marginVertical: 10 }}>{producto.description}</Text>
      <Text style={{ fontStyle: 'italic' }}>Categoría: {producto.category}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Editar" onPress={() => navigation.navigate('Editar', { id })} />
        <View style={{ height: 10 }} />
        <Button title="Eliminar" color="red" onPress={() => navigation.navigate('Eliminar', { id })} />
      </View>
    </View>
  );
}
