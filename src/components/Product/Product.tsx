import { useFetchProduct } from '../../hooks/useFetchProduct';
import { ProductType } from '../../types/types';

function Product() {
  const { product } = useFetchProduct();

  return (
    <div>
      {product && product.map((item: ProductType) => (
        <div key={ item.id }>
          <img src={ item.thumbnail } alt={ item.title } />
          <h3>{item.title}</h3>
          <p>
            Price:
            {' '}
            {item.price}
          </p>
          <p>
            Condition:
            {' '}
            {item.condition}
          </p>
          <p>
            Available Quantity:
            {' '}
            {item.available_quantity}
          </p>
          <button type="button">Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
