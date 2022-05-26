import React from 'react';
import { Link } from 'react-router-dom';
import myimg from '../../assets/images/Farhan.jpg';
const Portfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:flex-row-reverse flex-col-reverse  items-start">
                <div className="text-left ">

                    <p className="lg:text-5xl text-left font-bold mb-5">Name: <span>Farhan Ahmed</span></p>
                    <p className="lg:text-2xl text-left font-bold mb-5">Designation: <span>Front End -React js and Wordpress Developer</span></p>
                    <p className="lg:text-1xl text-left font-bold mb-5">Myself: <span >I have more than 4-year experience in web designing and website development, that's why I am highly
                        skilled in creating websites for all devices to help projects stand out in the crowd. I will try to give my
                        unique creation and If WordPress is a queen, then I am the king
                    </span></p>
                    <p ><span className='text-2xl font-bold my-5'> Education: </span> B.sc in Bachelor of Science in Computer
                        Science and Engineering
                        <ul>
                            <li>Leading University, Sylhet</li>
                            <li>Graduate</li>
                        </ul>
                    </p>
                   
                        <span className='lg:inline-block '><span className='text-2xl font-bold my-5'> Skills:  </span>
                        <ul className='lg:inline-flex mx-3 list-disc justify-evenly'>
                            <li className='mx-3'>JavaScript</li>
                            <li className='mx-3'>React Js </li>
                            <li className='mx-3'>HTML 5</li>
                            <li className='mx-3'>CSS 3</li>
                            <li className='mx-3'>Bootstrap 5</li>
                            <li className='mx-3'>WordPress </li>
                            <li className='mx-3'>tailwind </li>
                        </ul>
                        </span>
                
                   
                    <p className="text-3xl font-bold my-5" >My Project:
                        <ul className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-4'>
                            <li className='btn bg-sky-600 text-sky-100'><Link to={'https://www.apexlearning.org.uk/'}>apexlearning</Link></li>
                            <li className='btn bg-sky-600 text-sky-100'><Link to={'https://www.idesignacademy.net/'}> idesignacademy</Link></li>
                            <li className='btn bg-sky-600 text-sky-100'><Link to={'https://www.photographyacademy.net/'}>photographyacademy </Link></li>
                            <li className='btn bg-sky-600 text-sky-100'><Link to={'https://www.ipublicspeaking.net/'}> ipublicspeaking</Link></li>
                            <li className='btn bg-sky-600 text-sky-100'><Link to={'https://www.theyogatraining.net'}>theyogatraining </Link></li>
                            <li className='btn bg-sky-600 text-sky-100'><Link to={'https://www.theyogatraining.net/'}>theyogatraining</Link> </li>
                            <li className='btn bg-sky-600 text-sky-100'><Link to={'https://thecareerpath.net/'}>thecareerpath</Link></li>
                        </ul>
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <img src={myimg} className="max-w-full rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Portfolio;