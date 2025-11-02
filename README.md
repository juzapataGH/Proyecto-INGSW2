# 📱 Proyecto de E-commerce Móvil

**Proyecto creado por Zapata Julian** para la materia **Ingeniería de Software 2**, correspondiente al segundo año de la carrera de **Desarrollo de Software**.

Este proyecto es una aplicación móvil desarrollada con **React Native** y **Expo**. Permite gestionar productos de una tienda: crear, editar, eliminar y visualizar detalles.

---

## 🧭 Cómo utilizar el proyecto

### 🏠 Pantalla principal (Listado de productos)

Dentro de esta pantalla se verá un listado de productos, los cuales fueron creados con la API dada por los docentes.  
El usuario puede desplazarse verticalmente por la pantalla para ver todos los productos disponibles.

---

### ➕ Botón "Crear Nuevo Producto" (Pantalla Crear Producto)

Dentro de la pantalla principal, en la parte superior, se encuentra el botón **Crear Nuevo Producto**.  
Al oprimirlo, el usuario será direccionado a la pantalla de creación de nuevo producto.

En esta pantalla se pueden completar los siguientes campos:

- *Título del producto*  
- *Precio del producto*  
- *Descripción del producto*  
- *Categoría del producto*  
- *URL de imagen del producto*

Una vez que el usuario rellene los campos y oprima el botón **Guardar**, será direccionado nuevamente a la pantalla de **Listado de Productos**.  
> *Tanto la validación de campos vacíos como la creación del producto son limitaciones del proyecto.*

---

### 🔍 Detalle de producto (Pantalla Detalle Producto)

Desde la pantalla principal, si el usuario selecciona un producto, será llevado a la pantalla de detalle.  
En esta pantalla se visualizarán:

- *Título del producto*  
- *Precio del producto*  
- *Descripción del producto*  
- *Categoría del producto*  
- *Imagen del producto*

---

### ✏️ Editar Producto (Pantalla Editar Producto)

En la pantalla de detalle del producto, se encuentran dos botones: **Editar** y **Eliminar**.  
Al oprimir el botón **Editar**, el usuario será llevado a una pantalla donde podrá modificar el producto seleccionado.

Campos editables:

- *Título del producto*  
- *Precio del producto*  
- *Descripción del producto*  
- *Categoría del producto*  
- *URL de imagen del producto*

Una vez que el usuario oprima el botón **Guardar**, será direccionado nuevamente a la pantalla de **Detalle del Producto**.  
> *Tanto la validación de campos vacíos como la edición del producto son limitaciones del proyecto.*

---

### 🗑️ Eliminar Producto (Pantalla Eliminar Producto)

En la pantalla de detalle del producto, también se encuentra el botón **Eliminar**.  
Al oprimirlo, el usuario será llevado a una pantalla de confirmación.

Contenido de esta pantalla:

- Mensaje: *¿Está seguro que desea eliminar este producto?*  
- Botón **Confirmar**  
- Botón **Cancelar**

Acciones:

- Si el usuario oprime **Confirmar**, será llevado a la pantalla de **Listado de Productos**  
  > *La eliminación del producto es una limitación del proyecto.*

- Si el usuario oprime **Cancelar**, será llevado nuevamente a la pantalla de **Detalle del Producto**

---
