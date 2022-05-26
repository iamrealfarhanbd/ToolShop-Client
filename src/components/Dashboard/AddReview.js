import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MetaData from '../layout/MetaData';
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    let from = useLocation.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        const url = `https://toolshop-server.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Your review is Added!!!');
                reset();
                navigate(from, { replace: true });
            })
    };
    return (
        <>
            <MetaData title="ToolShop - ADD Review" />
            <div className='form-control w-full max-w-xs m-auto	my-10 '>
                <h2 >Please add a Review</h2>
                <form className='flex flex-col mt-10' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='YourName' {...register("name", { required: true, maxLength: 20 })} />
                    <input type="number"min="0" max="5" className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='yourrating' {...register("rating", { required: true, maxLength: 20 })} />
                    <textarea className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='YourReview' {...register("Review" , { required: true, maxLength: 100 })} />
                    <input type="submit" className="btn" value="Add Review" />
                </form>
            </div>
        </>
    );
};

export default AddReview;