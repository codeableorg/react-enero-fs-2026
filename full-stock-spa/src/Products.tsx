import { useState, type SubmitEvent } from 'react';

type Product = {
  id: number;
  name: string;
  inStock: boolean;
};

const initialProducts: Product[] = [
  { id: 1, name: 'Producto 1', inStock: true },
  { id: 2, name: 'Producto 2', inStock: false }
];

export default function Products() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  function addProduct(productName: string) {
    const newProduct: Product = {
      id: Date.now(),
      name: productName,
      inStock: true
    };

    const nextProducts = [...products, newProduct];
    setProducts(nextProducts);
  }

  function removeProduct(id: number) {
    const nextProducts = products.filter((product) => product.id !== id);
    setProducts(nextProducts);
  }

  function toggleStock(id: number) {
    const nextProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, inStock: !product.inStock };
      } else {
        return product;
      }
    });

    setProducts(nextProducts);
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const productName = (formData.get('product') ?? '').toString();
    addProduct(productName);
    form.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='product' />
        <button type='submit'>Add Product</button>
      </form>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <p>{product.name}</p>
              <p>
                <input
                  type='checkbox'
                  checked={product.inStock}
                  onChange={() => toggleStock(product.id)}
                />
                In Stock
              </p>
              <button onClick={() => removeProduct(product.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
