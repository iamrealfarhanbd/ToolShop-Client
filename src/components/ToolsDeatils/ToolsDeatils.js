import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';

import useToolDetails from '../../hooks/useToolDetails';

const ToolsDeatils = () => {
    const navigate = useNavigate();
    const { toolId } = useParams();
    const [tool] = useToolDetails(toolId);


console.log(tool)


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={tool.img} alt="Shoes" className='w-20' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{tool.productname}</h2>
                        <p className='text-left'>Quantity: {tool.quantity}</p>
                        <input type="number" placeholder="Quantity" class="input input-bordered input-error w-full max-w-xs" />
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => navigate(`/order/${tool._id}`)}>Buy</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-5xl font-bold">{tool.productname}</h1>
                    <p className="py-6">{tool.description}</p>
                    <button className="btn btn-primary">{tool.price}</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsDeatils;