import React        from 'react';
import Product      from './Product';
import productsData from './vschoolProducts';

function App () {
  const ProductComponent = productsData.map(item =>
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