import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import '../styling/reviews.css';

const Review = ({ username, stars, text, date }) => {
  const renderStars = () => {
    // Calculate the number of full stars
    const fullStars = Math.floor(stars);
    // Calculate the number of empty stars
    const emptyStars = 5 - Math.ceil(stars);
    // Check if there is a half star
    const hasHalfStar = stars % 1 !== 0;

    // Create an array to store the star components
    const starComponents = [];

    // Add full stars to the array
    for (let i = 0; i < fullStars; i++) {
      starComponents.push(<BsStarFill key={i} />);
    }

    // Add a half star if necessary
    if (hasHalfStar) {
      starComponents.push(<BsStarHalf key={fullStars} />);
    }

    // Add empty stars to the array
    for (let i = 0; i < emptyStars; i++) {
      starComponents.push(<BsStar key={fullStars + i + 1} />);
    }

    return starComponents;
  };

  return (
    <div className="review-wrapper">
      <div className="review">
        <div className="review-header">
          <span className="username">{username}</span>
          <span className="stars">{renderStars()}</span>
        </div>
        <div className="review-text">{text}</div>
        <div className="review-date">{date}</div>
      </div>
    </div>
  );
};

export default Review;
