import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import ProductContext from '../../context/ProductContext';
import {
  Attributes,
  ButtonBack,
  ButtonCart,
  Condition,
  Details,
  Image,
  Infos,
  Price,
  Product,
  ProductCard,
  ProductDetailsContainer,
  Shipping,
  SubTitle,
  Title,
  TotalSold,
} from './Styles';
import { translateCondition } from '../../helpers/translateCondition';
import Rating from '../../components/Rating/Rating';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import { TitleCard } from '../ShoppingCart/Styles';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, addToCart } = useContext(ProductContext);

  // Filter product by id
  const filterProduct = product.filter((el) => el.id === id);

  return (
    <ProductDetailsContainer>
      <ButtonBack onClick={ () => navigate('/') }>
        <FontAwesomeIcon icon={ faReply } size="1x" />
        {' '}
        Continuar comprando
      </ButtonBack>
      {filterProduct && filterProduct.map((el) => (
        <ProductCard key={ el.id }>
          <Product>
            <Condition>
              <TotalSold>
                {translateCondition(el.condition)}
                {' | +'}
                {el.sold_quantity ? el.sold_quantity : 0}
                {' '}
                vendidos
              </TotalSold>
              <Rating item={ el } />
            </Condition>
            <TitleCard>
              <Title>{el.title}</Title>
              <FavoriteButton item={ el } />
            </TitleCard>
            <Image src={ el.thumbnail } alt={ el.title } />
          </Product>
          <Details>
            <SubTitle>Detalhes do produto</SubTitle>
            {el.attributes.map((attribute) => (
              <Attributes key={ attribute.name }>
                <li>
                  {attribute.name}
                  :
                  {' '}
                  <span>
                    {attribute.value_name}
                  </span>
                </li>
              </Attributes>
            ))}
            <Infos>
              <Shipping>
                {el.shipping.free_shipping ? 'Frete Grátis' : ''}
              </Shipping>
              <Price>
                Valor Total:
                R$
                {' '}
                {el.price}
              </Price>
              <ButtonCart onClick={ () => addToCart(el) }>
                Adicionar ao carrinho
              </ButtonCart>
            </Infos>
          </Details>
        </ProductCard>
      ))}
    </ProductDetailsContainer>

  );
}

export default ProductDetails;
