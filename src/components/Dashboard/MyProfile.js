import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate ,Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
const MyProfile = () => {

    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    let from = useLocation.state?.from?.pathname || "/";
    const email = user?.email;

    const { data: userones, isLoading, refetch } = useQuery('userones', () => fetch(`https://toolshop-server.onrender.com/user?email=${email}`, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    
    const onSubmit = data => {
        console.log(data);
        const url = `https://toolshop-server.onrender.com/user/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
              
                toast('Your info is Added!!!');
                reset();
            })
    };
 
    return (
        <>


            <div className=" min-h-screen bg-base-200">
            <h1 className="text-5xl font-bold">My Profile!</h1>
                <div className=" flex items-center lg:items-start flex-col lg:flex-row lg:justify-evenly ">
                    <div className="text-center lg:text-left my-7">
                        <div className="card card-body  w-96 shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold">Name: {userones.name}</h1>
                            <p className="py-1">Email: {userones.email}</p>
                            {userones.education ? <p className="py-1">Education: {userones.education}</p>: ""}
                            {userones.LinkedIn ? <p className="py-1">Social link:<Link to={"{userones.LinkedIn}"}>{userones.LinkedIn}</Link></p>: ""}
                            {userones.Facebook ? <p className="py-1">Social link: <Link to={"{userones.Facebook}"}>{userones.Facebook}</Link></p>: ""}
                            {userones.Address ?  <p className="py-1">Address: {userones.Address}</p>: ""}
                            {userones.number ?   <p className="py-1">Number: {userones.number}</p>: ""}
                            <p className="py-1">{userones.role ? `Role: ${userones?.role}`:" "}</p>
                         
                          
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-7">
                        <div className="card-body">
                            <form className='flex flex-col mt-10' onSubmit={handleSubmit(onSubmit)}>
                                
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='name' value={user?.displayName} {...register("name", { required: true, })} readOnly />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='email' value={user?.email} type="email"{...register("email", { required: true, })} readOnly />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='your education' {...register("education", {value:`${userones.education ? userones.education : ""}`})} />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='your Address' {...register("Address", {value:`${userones.Address ? userones.Address : ""}`})} />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='LinkedIn link' {...register("LinkedIn", {value:`${userones.LinkedIn ? userones.LinkedIn : ""}`})} />
                                <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Facebook link' {...register("Facebook", {value:`${userones.Facebook ? userones.Facebook : ""}`})} />
                                <input type="number" className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='phone number' {...register("number",{value:`${userones.number ? userones.number : ""}`})} />
                                <input type="submit" className="btn" value="Add Info" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MyProfile;