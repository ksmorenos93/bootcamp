import {memo} from 'react';

const ProductItem = memo(({product}) => {
   return (
     <div>
       <h3>{product.name}</h3>
       <ul>
         <li>Tipo: {product.type}</li>
         <li>SKU: {product.sku}</li>
         <li>Precio: {product.type}</li>
         <li>Proveedor:{product.provider}</li>
       </ul>
     </div>
   )
});

export default ProductItem;