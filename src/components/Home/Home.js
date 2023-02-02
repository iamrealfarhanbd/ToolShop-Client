
import React, { useRef } from 'react';
import Image1 from '../../assets/images/image1.jpg';
import Image3 from '../../assets/images/Image3.jpg';
import Image4 from '../../assets/images/Image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import Image6 from '../../assets/images/image6.jpg';
import useAllTools from '../../hooks/useAlltools';
import useReview from '../../hooks/useReview';
import Loading from '../../Shared/Loading';
import ReviewCard from '../AllReview/ReviewCard';
import Card from '../Card/Card';
import MetaData from "../layout/MetaData";
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    const [tools] = useAllTools();
    const [reviews] = useReview([])

    const myRef = useRef(null)
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    return (
        <>
            <MetaData title="ToolShop -Home" />

            <div className="hero min-h-screen bg-base-200 p-4">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <img src={image5} className="max-w-full rounded-lg shadow-2xl" alt='image5' />
                        </div>
                    </div>
                    <div >
                        <h1 className="text-5xl font-bold">We Sale best Tool all over the world!</h1>
                        <p className="py-6">In addition to our shop, our website (https://toolshop-56a24.web.app/) offers over 55,000 bike parts and accessories</p>

                        <button className="btn btn-primary" onClick={() => scrollToRef(myRef)} >Get Started</button>
                    </div>
                </div>
            </div>

            <div className="stats shadow stats-vertical lg:stats-horizontal ">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Monthly Sale</div>
                    <div className="stat-value">31K $</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New customers</div>
                    <div className="stat-value">120M+</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value">300K $ +</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Tools</div>
                    <div className="stat-value">1,200K</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">5 Star</div>
                    <div className="stat-title">Review </div>
                    <div className="stat-desc text-secondary">Best Tools</div>
                </div>

            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={Image1} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={Image3} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={Image4} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={Image6} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
                <a href="#slide3" className="btn btn-xs">3</a>
                <a href="#slide4" className="btn btn-xs">4</a>
            </div>

            <section className=' p-4' ref={myRef}>
                <h1 className="text-5xl font-bold">All Tools!</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center'>
                    {
                        tools.length ? tools.slice(0, 6).map(tool => <Card key={tool._id} tool={tool} />) : <Loading />
                    }
                </div>

            </section>
            <section className=' p-4' >
                <h1 className="text-5xl font-bold">All Review!</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 p-4 justify-items-center'>

                    {
                        reviews.length ? reviews.slice(0, 6).map(review => <ReviewCard key={review._id} review={review} />) : <Loading />
                    }

                </div>

            </section>

            <section className="footer footer-center p-10 bg-base-300 text-base-content">

            
                
                <div>
                    <span className="footer-title">Subscribe Us For Newsletter</span>
                    <div className="form-control lg:w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;