# React + Vite

# Mi Proyecto de Tarjetas

Este proyecto muestra una tarjeta de producto utilizando React. El componente `Card` obtiene datos de una API y los muestra en la interfaz.

## Instalación

1. Clonamos este repositorio.
2. Ejecuta `yarn` para instalar las dependencias.
3. Ejecuta `yarn dev` para iniciar la aplicación.

## Componente `Card`

El componente `Card` muestra información sobre un producto:

- Título: {product.title}
- Descripción: {product.description}
- Precio: UDS$ {product.price}

## Cambios con TypeScript

Si trabajara con TypeScript (`.tsx`), agregaría tipos a la variable `product`:

```tsx
interface Product {
  title: string;
  description: string;
  price: number;
}

const [product, setProduct] = useState<Product>({});


## Install & Run
- yarn 
- yarn dev
