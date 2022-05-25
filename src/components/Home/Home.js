
import React from 'react';
import chair from '../../assets/images/chair.png';
import useAllTools from '../../hooks/useAlltools';
import Loading from '../../Shared/Loading';
import Card from '../Card/Card';
import MetaData from "../layout/MetaData";
import './Home.css';
const Home = () => {
 const [tools] = useAllTools();
    return (
        <>
            <MetaData title="ToolShop -Home" />

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='this is chair'/>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {
                tools.length ? tools.slice(0, 6).map(tool => <Card key={tool._id} tool={tool} />) : <Loading />

            }

        </>
    );
};

export default Home;