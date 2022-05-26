
import React from 'react';
import chair from '../../assets/images/Farhan.jpg';
import useAllTools from '../../hooks/useAlltools';
import useReview from '../../hooks/useReview';
import Loading from '../../Shared/Loading';
import ReviewCard from '../AllReview/ReviewCard';
import Card from '../Card/Card';
import MetaData from "../layout/MetaData";
import './Home.css';
const Home = () => {
    const [tools] = useAllTools();
    const [reviews] = useReview([])



    return (
        <>
            <MetaData title="ToolShop -Home" />

            <div className="hero min-h-screen bg-base-200 p-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='this is chair' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <section className=' p-4'>
                <h1 className="text-5xl font-bold">All Tools!</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                    {
                        tools.length ? tools.slice(0, 6).map(tool => <Card key={tool._id} tool={tool} />) : <Loading />
                    }
                </div>

            </section>
            <section className=' p-4'>
                <h1 className="text-5xl font-bold">All Review!</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-4'>

                    {
                        reviews.length ? reviews.slice(0, 6).map(review => <ReviewCard key={review._id} review={review} />) : <Loading />
                    }

                </div>

            </section>

        </>
    );
};

export default Home;