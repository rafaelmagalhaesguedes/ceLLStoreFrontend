import { FavButton } from './Styles';
import favorited from '../../assets/icons/blackHeartIcon.svg';
import noFavorited from '../../assets/icons/whiteHeartIcon.svg';
import { ProductType } from '../../types/types';
import useFavorites from '../../hooks/useFavorites';

function FavoriteButton({ item } : { item: ProductType }) {
  const { addFavorite, isFavorited } = useFavorites(item);

  return (
    <FavButton data-testid="favorite-btn" onClick={ addFavorite }>
      <img
        src={ isFavorited ? favorited : noFavorited }
        alt={ isFavorited ? 'favorited' : 'noFavorited' }
      />
    </FavButton>
  );
}

export default FavoriteButton;
