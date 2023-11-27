import { useFetchProduct } from '../../hooks/useFetchProduct';
import { ProductType } from '../../types/types';
import { ButtonCart, ProductCard, ProductContainer } from './Styles';

function Product() {
  const { product } = useFetchProduct();

  return (
    <ProductContainer>
      {product && product.map((item: ProductType) => (
        <ProductCard key={ item.id }>
          <img src={ item.thumbnail } alt={ item.title } />
          <h3>{item.title}</h3>
          <div>
            <p>
              R$
              {' '}
              {item.price}
            </p>
            <span>
              {item.shipping.free_shipping ? 'Frete Grátis' : ''}
            </span>
          </div>
          <ButtonCart type="button">Adicionar ao carrinho</ButtonCart>
        </ProductCard>
      ))}
    </ProductContainer>
  );
}

export default Product;
