import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Order = () => {
    const navigate = useNavigate();
    const { orderID } = useParams();
    const [orderItem, setOrderItem] = useState({});
    const [quantityError, setQuantityError] = useState();
    const [count, setCount] = useState(1);
    const { register, handleSubmit, reset } = useForm();
    // Create handleIncrement event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        if (count <= 1) {
            return
        }
        setCount(prevCount => prevCount - 1);
    };

    useEffect(() => {
        const url = `https://toolshop-server.herokuapp.com/tool/${orderID}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderItem(data));

    }, [orderID]);

    const [user, loading, error] = useAuthState(auth);

    const handleOrder = (event, count) => {
        event.preventDefault();

        const order = {
            orderId: orderItem._id,
            productname: orderItem.productname,
            useremail: user.email,
            username: user.displayName,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
        }

        if (10 > parseInt(event.target.quantity.value)) {
            return setQuantityError(`We Cant Provide 10 quantity`)
        }
        if (parseInt(orderItem.quantity) < parseInt(event.target.quantity.value)) {
            return setQuantityError(`We Cant Provide more then ${orderItem.quantity} quantity`)
        }
        setQuantityError('');
        fetch('https://toolshop-server.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Your Order Product name is , ${orderItem.productname} `)
                    navigate("/dashboard/myorder");
                }
                else {
                    toast(`Already have and order on ${orderItem.productname} `)
                }
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:items-start">
                <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" placeholder="Type here" value={orderItem.productname} className="input input-bordered input-success w-full max-w-xs" required />
                            <div className="flex ">
                                <span className='btn bg-green-400 text-sky-50' onClick={handleDecrement}>-</span>
                                <input className='w-1/4 input input-bordered input-success w-full max-w-xs' type="number" name="quantity" value={count} placeholder="Type quantity"  required />
                                <span className='btn bg-green-400 text-sky-50	' onClick={handleIncrement}>+</span>
                            </div>
                            <p className='text-left font-extrabold text-red-600'>{quantityError}</p>
                            <input type="text" placeholder="Type here" name="price" value={orderItem.price * count} className="input input-bordered input-success w-full max-w-xs" required />
                            <input type="text" placeholder="Type here" disabled value={user?.displayName || ''} className="input input-bordered input-success w-full max-w-xs" required />
                            <input type="text" placeholder="Type here" disabled value={user?.email || ''} className="input input-bordered input-success w-full max-w-xs" required />
                            <input type="text" name="address" placeholder="your address" className="input input-bordered input-success w-full max-w-xs" required />
                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered input-success w-full max-w-xs" required />
                            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                        </form>
                        {/* <form className='flex flex-col mt-10' onSubmit={handleSubmit(handleOrder)}>
                          
                            <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='name' value={user?.displayName} {...register("name", { required: true, })} readOnly />
                            <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='email'value={user?.email} type="email"{...register("email", { required: true, })} readOnly />
                            <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='your education' {...register("education", { value: `${orderItem?.productname} ` })} />
                            <div className="flex ">
                                <span className='btn bg-green-400 text-sky-50	' onClick={handleDecrement}>-</span>
                             <input type="number" className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='Quantity' {...register("number", { value: `${count }` })} />
                                <span className='btn bg-green-400 text-sky-50	' onClick={handleIncrement}>+</span>
                            </div>
                            <input className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='your Address' {...register("Address",)} />
                            <input type="number" className='input input-bordered input-primary w-full max-w-xs mb-2' placeholder='phone number' {...register("number", { value: `${count }` })} />
                            <input type="submit" className="btn" value="Add Review" />
                        </form> */}
                    </div>
                </div>

                <div className='card lg:w-3/4 p-5 bg-base-100 shadow-xl flex flex-col items-center'>
                    <figure className=' bg-base-100 shadow-xl'><img src={orderItem.img} alt="Shoes" /></figure>
                    <div className="divider"></div> 
                    <div className="flex flex-col items-start ">
                        <p className="text-2xl font-bold text-blue-500">Name: <span className='text-2xl font-bold text-blue-300'>{orderItem.productname}</span></p>
                        <div className="divider"></div> 
                        <p className="text-2xl font-bold text-blue-500">Quantity: <span className='text-2xl font-bold text-blue-300'> {orderItem.quantity}</span></p>
                        <div className="divider"></div> 
                        <p className="text-2xl font-bold text-blue-500">Per Unit Price: <span className='text-2xl font-bold text-blue-300'> {orderItem.price}</span></p>
                        <div className="divider"></div> 
                        <p className="text-2xl font-bold text-blue-500 text-center">Description:</p>
                        <span className='text-2xl font-bold text-blue-300 text-left'> {orderItem.description}</span>
                    </div>
                </div>
            </div>
        </div>



        //     <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //             <figure><img src={orderItem.img} alt="Shoes" className='w-20' /></figure>
        //             <div className="card-body">
        //             <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
        //             <input type="text" placeholder="Type here" value={orderItem.productname} className="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" placeholder="Type here" value={orderItem.quantity}  className="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" placeholder="Type here" value={orderItem.price}  className="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" placeholder="Type here" disabled value={user?.displayName || ''} className="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" placeholder="Type here" disabled value={user?.email || ''}  className="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered input-success w-full max-w-xs" />
        //             <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
        //         </form>
        //                 <div className="card-actions justify-end">
        //                     <button className="btn btn-primary" onClick={() => navigate(`/order/${orderItem._id}`)}>Buy</button>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    );
};

export default Order;