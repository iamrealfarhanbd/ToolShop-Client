import React from 'react';

import PrettyRating from "pretty-rating-react";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: faStar,
  }
};

const colors = {
 star: ['#d9ad26', '#d9ad26', '#434b4d'],
};



const ReviewCard = ({ review }) => {

  const { name, Review, img, rating } = review

  
  return (
    // <div className=" bg-primary text-primary-content rounded-lg p-5 m-5">
    //   <div className="avatar flex items-center">
    //     <div className="w-24 rounded-xl mx-5 ">
    //       <img src={img} alt="" />
    //     </div>
    //     <div className="stat-title !flex items-center"><p>Name: {name}</p></div>
    //   </div>
    //   <div className="stat-value flex items-left p-5">
    //     Review:
    //     <p className='text-2xl'> {Review}</p>
    //   </div>
    //   <div className="stat-value flex items-left p-5"></div>
    // </div>
    <div className="card lg:w-96 md:w-56  lg:my-2 my-5 max-w-lg bg-primary text-primary-content">
    <div className="card-body">
    <div className="avatar flex items-center">
         <div className="w-24 rounded-xl mx-5 ">
         <img src={img} alt="" />
      </div>
      </div>
      <h2 className="card-title"><b className='text-amber-400'>Name:</b> {name}</h2>
      <p className='lg:text-2xl text-1xl text-left'><b className='text-amber-400'>Review:</b> {Review} </p>
      <div className="card-actions justify-start">
      <b className='text-amber-400'>Rating:</b> <PrettyRating value={rating} icons={icons.star} colors={colors.star} /> 
      </div>
    </div>
  </div>
  );
};

export default ReviewCard;