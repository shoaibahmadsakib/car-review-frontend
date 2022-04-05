import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CustomerReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    const url = "customerData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold pb-10">Customer Review</h1>
      <div className="grid grid-cols-3 gap-6">
        {review.splice(0, 3).map((review) => {
          return (
            <div className="leading-6 pt-5 pb-6 border-2 shadow-xl rounded-lg" key={review.id}>
            
              <img className="image-height px-3" src={review.img} alt="" width="100%"  />
              <h2>{review.name}</h2>
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
      <Link to="/review">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          CLick for more
        </button>
      </Link>
    </div>
  );
};

export default CustomerReview;
