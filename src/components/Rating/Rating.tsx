import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type RatingProps = {
  item: {
    seller: {
      seller_reputation: {
        transactions: {
          ratings: {
            positive: number;
          };
        };
      };
    };
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

  return (
    <div>
      {(item.seller
        .seller_reputation.transactions.ratings.positive * 5).toFixed(1)}
      {' '}
      {renderStars(item.seller
        .seller_reputation.transactions.ratings.positive * 5)}
    </div>
  );
}

export default Rating;
