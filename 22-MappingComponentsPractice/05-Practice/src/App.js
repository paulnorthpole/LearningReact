import React   from 'react';
import Product from './Product';
import product from './vschoolProducts';

function App () {
  const productComponent = product.map(item =>
    <Product
      key={ item.id }
      name={ item.name }
      price={ item.price }
      description={ item.description }
    />);

  return (
    <div>
      { productComponent }
    </div>
  );
}

export default App;