import { useContext } from 'react';
import { ProductType } from '../../types/types';
import { ButtonCart, ProductCard, ProductContainer, ProductWrapper } from './Styles';
import ProductContext from '../../context/ProductContext';
import Loading from '../Loading/Loading';

function Product() {
  const { product, loading } = useContext(ProductContext);

  return (
    <ProductContainer>
      {!loading ? (
        <ProductWrapper>
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
        </ProductWrapper>
      ) : (
        <Loading />
      )}
    </ProductContainer>
  );
}

export default Product;
