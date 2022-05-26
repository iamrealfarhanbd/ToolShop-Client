import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MetaData from '../layout/MetaData';
const AddTools = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    let from = useLocation.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        const url = `https://toolshop-server.herokuapp.com/tools`;
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
                toast('Your Product is Added!!!');
                reset();
                navigate(from, { replace: true });
            })
    };
    return (
        <>
            <MetaData title="Ebazar - ADD Product" />
            <div className='form-control w-full max-w-xs m-auto	my-10 '>
                <h2 >Please add a Tools</h2>
                <form className='flex flex-col mt-10' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Product Name' {...register("productname", )} />
                    <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Provider Name' value={user?.displayName} {...register("providername", { required: true, })} readOnly />
                    <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Email' value={user?.email} type="email"{...register("email", { required: true, })} readOnly />
                    <textarea className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Description' {...register("description")} />
                    <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='per unit Price' type="number" {...register("price")} />
                    <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input type="submit" className="btn" value="Add Tools" />
                </form>
            </div>
        </>
    );
};

export default AddTools;