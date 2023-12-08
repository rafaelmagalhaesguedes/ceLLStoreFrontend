import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RatingContainer } from './Styles';
import { Seller } from '../../types/types';

type RatingProps = {
  item: {
    seller: Seller;
  };
};

function Rating({ item } : RatingProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon icon={ faStar } key={ i } />);
    }

    for (let i = 0; i < halfStar; i++) {
      stars.push(<FontAwesomeIcon icon={ faStarHalfAlt } key={ fullStars + i } />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={ faStar }
          className="empty"
          key={ fullStars + halfStar + i }
        />,
      );
    }

    return stars;
  };

  // Check if the necessary objects exist before trying to access their properties
  const rating = item?.seller?.seller_reputation?.transactions?.ratings?.positive;

  // If rating is undefined, return null or some default JSX
  if (rating === undefined) {
    return 'Sem avaliações';
  }

  return (
    <RatingContainer>
      <div className="rating">
        {(rating * 5).toFixed(1)}
      </div>
      <div className="stars">
        {renderStars(rating * 5)}
      </div>
    </RatingContainer>
  );
}

export default Rating;
