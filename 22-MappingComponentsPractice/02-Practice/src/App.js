import React    from 'react';
import Product  from './Product';
import products from './vschoolProducts';

function App () {
  const ProductComponent = products.map(item =>
    <Product
      key={ item.id }
      product={ item }
    />);

  return (
    <div>
      { ProductComponent }
    </div>
  );
}

export default App;