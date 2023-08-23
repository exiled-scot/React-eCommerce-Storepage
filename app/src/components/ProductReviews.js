import React from 'react';
import '../styling/reviews.css';
import Review from './Review';

const ProductReviews = () => {
  const reviewsData = [
    {
      username: 'User1',
      stars: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lorem in urna tincidunt vestibulum. Morbi condimentum sem at arcu maximus, ac tincidunt dui pharetra. Sed ullamcorper, nisi non aliquam lobortis, mauris lacus pellentesque nulla, a fringilla lorem metus sit amet magna. Nam porta ipsum tellus, in dapibus eros eleifend vel. Nulla efficitur sollicitudin turpis ut facilisis. Fusce non metus vel leo condimentum auctor. Mauris et justo ut felis mollis suscipit vel in metus. Proin facilisis, lacus non dapibus euismod, purus sapien tincidunt velit, id ullamcorper nunc mauris at augue. Nulla facilisi. Mauris et erat ullamcorper, posuere tortor et, blandit purus.',
      date: '2021-01-01',
    },
    {
      username: 'User2',
      stars: 5,
      text: 'The best product I have ever used!',
      date: '2021-01-05',
    },
    // Add more reviews as needed
  ];

  const totalReviews = reviewsData.length;
  const totalStars = reviewsData.reduce((acc, review) => acc + review.stars, 0);
  const averageStars = totalReviews ? Math.round(totalStars / totalReviews) : 0;

  return (
    <div className="reviews">
      <div className="reviews-statistics">
        <h4>{totalReviews} Reviews</h4>
        <p>Average Stars: {averageStars}</p>
      </div>
      {reviewsData.map((review, index) => (
        <div className="review-item" key={index}>
          <Review {...review} />
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
