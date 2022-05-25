import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MyProfile = () => {

    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const [proUser, setProuser] = useState({})
    const navigate = useNavigate();
    let from = useLocation.state?.from?.pathname || "/";
    const email = user?.email;

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/user/${email}`;
        fetch(url, {
            method: 'PUT',
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
            })
    };
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user?email=${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');

                    }
                    return res.json()
                })
                .then(data => {

                    setProuser(data);
                });
        }
    }, [proUser])

    return (
        <>
            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='form-control w-full max-w-xs m-auto	my-10 '>
                        <form className='flex flex-col mt-10' onSubmit={handleSubmit(onSubmit)}>
                        <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Provider Name' value={user?.displayName} {...register("providername", { required: true, })} readOnly />
                    <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Email' value={user?.email} type="email"{...register("email", { required: true, })} readOnly />
                            <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='your education' {...register("education", { required: true, maxLength: 20 })} />
                            <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='your Address' {...register("Address", { })} />
                            <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='profile link' {...register("location", { })} />
                            <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='profile link' {...register("location", { })} />
                            <input type="number"  className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='phone number' {...register("number", { required: true, maxLength: 20 })} />
                            <input type="submit" className="btn" value="Add Review" />
                        </form>
                    </div>
                    
                    <div>
                        <h1 className="text-5xl font-bold">{proUser.name}</h1>
                        <h1 className="text-5xl font-bold">{proUser.email}</h1>
                        <p className="py-6">{proUser.education}</p>
                        <p className="py-6">{proUser.Address}</p>
                        <p className="py-6">{proUser.number}</p>
                        <p className="py-6">{proUser?.role}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <h2>My Profile</h2> */}


            <div className=" min-h-screen bg-base-200">
            <h1 className="text-5xl font-bold">My Profile!</h1>
                <div className=" flex flex-col lg:flex-row justify-evenly ">
                    <div className="text-center lg:text-left my-7">
                        <div className="card card-body  w-96 shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold">Name: {proUser.name}</h1>
                            <p className="py-1">Email: {proUser.email}</p>
                            <p className="py-1">Education: {proUser.education}</p>
                            <p className="py-1">Social Icon:{proUser.LinkedIn}
                            
                            </p>
                            <p className="py-1">Address: {proUser.Address}</p>
                            <p className="py-1">Number: {proUser.number}</p>
                            <p className="py-1">{proUser.role ? `Role: ${proUser?.role}`:" "}</p>
                         
                          
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-7">
                        <div className="card-body">
                            <form className='flex flex-col mt-10' onSubmit={handleSubmit(onSubmit)}>
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='name' value={user?.displayName} {...register("providername", { required: true, })} readOnly />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='email' value={user?.email} type="email"{...register("email", { required: true, })} readOnly />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='your education' {...register("education", { required: true, maxLength: 20 })} />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='your Address' {...register("Address", {})} />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='LinkedIn link' {...register("LinkedIn", {})} />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Facebook link' {...register("Facebook", {})} />
                                <input type="number" className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='phone number' {...register("number", { required: true, maxLength: 20 })} />
                                <input type="submit" className="btn" value="Add Review" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MyProfile;