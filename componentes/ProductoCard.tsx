import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Producto } from '../tipos/Producto';

type Props = {
  producto: Producto;
  onPressDetalle: () => void;
};

export default function ProductoCard({ producto, onPressDetalle }: Props) {
  return (
    <TouchableOpacity onPress={onPressDetalle} style={{ marginVertical: 10, borderWidth: 1, padding: 10 }}>
      <Image source={{ uri: producto.image }} style={{ width: 100, height: 100 }} />
      <Text style={{ fontWeight: 'bold' }}>{producto.title}</Text>
      <Text>${producto.price}</Text>
    </TouchableOpacity>
  );
}
