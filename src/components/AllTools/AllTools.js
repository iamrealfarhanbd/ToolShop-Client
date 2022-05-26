import React from 'react';

import PrettyRating from "pretty-rating-react";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import useAllTools from '../../hooks/useAlltools';
import Card from '../Card/Card';
import Loading from '../../Shared/Loading';

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



const AllTools = ({ review }) => {

  const [tools] = useAllTools([])

  return (
    <section className=' p-4' >
      <h1 className="text-5xl font-bold">All Tools!</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center'>
        {
          tools.length ? tools.slice(0, 6).map(tool => <Card key={tool._id} tool={tool} />) : <Loading />
        }
      </div>

    </section>
  );
};

export default AllTools;