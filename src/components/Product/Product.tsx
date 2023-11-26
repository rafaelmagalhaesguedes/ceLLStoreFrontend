import { useFetchProduct } from '../../hooks/useFetchProduct';
import { ProductType } from '../../types/types';
import { ProductCard, ProductContainer } from './Styles';

function Product() {
  const { product } = useFetchProduct();

  return (
    <ProductContainer>
      {product && product.map((item: ProductType) => (
        <ProductCard key={ item.id }>
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
        </ProductCard>
      ))}
    </ProductContainer>
  );
}

export default Product;
