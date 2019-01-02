import React    from 'react';
import Product from './Product';
import product  from './vschoolProducts';

function App () {
  const ProductComponent = product.map(item =>
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