import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { estilosGlobales } from '../estilos/estilos';
import { RootStackParamList } from '../navegacion/navegador';

type Props = {
  route: RouteProp<RootStackParamList, 'Eliminar'>;
};

export default function EliminarProducto({ route }: Props) {
  const { id } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const confirmarEliminacion = () => {
    // Acá podrías llamar a eliminarProducto(id) si querés eliminar realmente
    navigation.navigate('Lista');
  };

  const cancelarEliminacion = () => {
    navigation.navigate('Detalle', { id });
  };

  return (
    <View style={estilosGlobales.pantalla}>
      <Text style={estilosGlobales.titulo}>¿Está seguro que desea eliminar este producto?</Text>

      <View style={estilosGlobales.boton}>
        <Button title="Confirmar" color="red" onPress={confirmarEliminacion} />
      </View>

      <View style={estilosGlobales.boton}>
        <Button title="Cancelar" onPress={cancelarEliminacion} />
      </View>
    </View>
  );
}
