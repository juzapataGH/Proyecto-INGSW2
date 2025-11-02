import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Producto } from '../tipos/Producto';

type Props = {
  productoInicial?: Producto;
  onSubmit: (producto: Producto) => void;
};

export default function FormularioProducto({ productoInicial, onSubmit }: Props) {
  const [title, setTitle] = useState(productoInicial?.title || '');
  const [price, setPrice] = useState(String(productoInicial?.price || ''));
  const [description, setDescription] = useState(productoInicial?.description || '');
  const [category, setCategory] = useState(productoInicial?.category || '');
  const [image, setImage] = useState(productoInicial?.image || '');

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Título" value={title} onChangeText={setTitle} style={{ marginBottom: 10 }} />
      <TextInput placeholder="Precio" value={price} onChangeText={setPrice} keyboardType="numeric" style={{ marginBottom: 10 }} />
      <TextInput placeholder="Descripción" value={description} onChangeText={setDescription} style={{ marginBottom: 10 }} />
      <TextInput placeholder="Categoría" value={category} onChangeText={setCategory} style={{ marginBottom: 10 }} />
      <TextInput placeholder="URL de imagen" value={image} onChangeText={setImage} style={{ marginBottom: 10 }} />
      <Button
        title="Guardar"
        onPress={() =>
          onSubmit({
            title,
            price: parseFloat(price),
            description,
            category,
            image,
          })
        }
      />
    </View>
  );
}
