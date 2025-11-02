// estilos.ts
import { StyleSheet } from 'react-native';

export const colores = {
  fondo: '#ffffff',
  texto: '#000000',
  primario: '#007bff',
  secundario: '#6c757d',
  peligro: '#dc3545',
};

export const estilosGlobales = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: 20,
  },
  texto: {
    color: colores.texto,
    fontSize: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 10,
  },
  boton: {
    marginVertical: 10,
  },
  separador: {
    height: 10,
  },
});
