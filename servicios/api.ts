const API_URL = 'https://fakestoreapi.com/products';

export const obtenerProductos = () => fetch(API_URL).then(res => res.json());
export const obtenerProducto = (id: number) => fetch(`${API_URL}/${id}`).then(res => res.json());
export const crearProducto = (producto: any) =>
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(producto),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json());

export const editarProducto = (id: number, producto: any) =>
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(producto),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json());

export const eliminarProducto = (id: number) =>
  fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then(res => res.json());
