import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, View } from 'react-native';
import ProductoCard from '../componentes/ProductoCard';
import { estilosGlobales } from '../estilos/estilos';
import { RootStackParamList } from '../navegacion/navegador';
import { obtenerProductos } from '../servicios/api';
import { Producto } from '../tipos/Producto';

export default function ListaProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    obtenerProductos().then(data => {
      setProductos(data);
      setCargando(false);
    });
  }, []);

  if (cargando) return <ActivityIndicator size="large" />;

  return (
    <View style={estilosGlobales.pantalla}>
      <Button title="Crear nuevo producto" onPress={() => navigation.navigate('Crear')} />
      <FlatList
        data={productos}
        keyExtractor={item => item.id?.toString() || ''}
        renderItem={({ item }) => (
          <ProductoCard
            producto={item}
            onPressDetalle={() => navigation.navigate('Detalle', { id: item.id })}
          />
        )}
      />
    </View>
  );
}
