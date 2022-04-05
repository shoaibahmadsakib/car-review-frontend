import React from "react";
import useReview from "../Hooks/useReview";

const Review = () => {
  const [review,setReview] = useReview([])
 

  return (
    <div>
      <h1>Customer Review</h1>
      <div className="grid grid-cols-3 gap-6">
        {review.map((review) => {
          return (
            <div
              className="leading-6 pt-5 pb-6 border-2 shadow-xl rounded-lg"
              key={review.id}
            >
              <h2>{review.name}</h2>
              <img
                className="image-height px-3"
                src={review.img}
                alt=""
                width="100%"
              />
              <p>{review.phone}</p>
              <p>
                <small>{review.address}</small>
              </p>
              <p>
                <small>{review.email}</small>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
