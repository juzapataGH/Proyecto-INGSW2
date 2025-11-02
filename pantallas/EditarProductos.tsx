import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import FormularioProducto from '../componentes/FormularioProducto';
import { estilosGlobales } from '../estilos/estilos';
import { RootStackParamList } from '../navegacion/navegador';
import { editarProducto, obtenerProducto } from '../servicios/api';
import { Producto } from '../tipos/Producto';

type Props = {
  route: RouteProp<RootStackParamList, 'Editar'>;
};

export default function EditarProducto({ route }: Props) {
  const { id } = route.params;
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargando, setCargando] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProducto(id).then(data => {
      setProducto(data);
      setCargando(false);
    });
  }, [id]);

  const handleEditar = (datosEditados: Producto) => {
    editarProducto(id, datosEditados).then(() => {
      Alert.alert('Producto editado');
      navigation.goBack();
    });
  };

  if (cargando || !producto) return <ActivityIndicator size="large" />;


return (
  <View style={estilosGlobales.pantalla}>
    <FormularioProducto productoInicial={producto} onSubmit={handleEditar} />
  </View>
);

}
