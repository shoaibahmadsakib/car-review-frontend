import React from "react";
import headerImg from "../Assets/headerImg.jpg";
import CustomerReview from "../Components/CustomerReview";

const Home = () => {
  return (
    <div className="mx-20">
      <div className="twoSection flex justify-between">
        <div className="firstSection w-1/2 flex items-center">
          <div className="title ">
            <h1 className="font-bold text-4xl pb-10">
              <b className="text-blue-500">Your Next Car </b>
              <br />
              <b>Your Best car</b>
            </h1>
          
           
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              CONTACT OUT TEAM
            </button>
          </div>
        </div>
        <div className="secondSection w-1/2">
          <img src={headerImg} alt="" width="100%" />
        </div>
      </div>
      <CustomerReview />
    </div>
  );
};

export default Home;
