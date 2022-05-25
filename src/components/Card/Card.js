import React from 'react';
import {useNavigate } from 'react-router-dom';

const Card = ({tool}) => {
    const navigate = useNavigate();
    const  {productname,providername,email,description,quantity,price,img,_id} = tool;

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productname}</h2>
                    <p><b>{providername}</b></p>
                    <p>{description}</p>
                    <p>{quantity}</p>
                    <p>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => navigate(`/order/${_id}`)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;