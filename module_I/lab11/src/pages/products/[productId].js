export async function getServerSideProps({ params}) {
  console.log(params);
  const response = await fetch(`http://localhost:3000/api/v1/products/${params.productId}`);
  const product = await response.json();
  
  return {
    props: {
      product,
    },
  }
}

const Product = ({ product }) => (
  <div>
    <h1>Producto {product.name}</h1>
    <p>Precio ${product.price}</p>
  </div>
);

export default Product;