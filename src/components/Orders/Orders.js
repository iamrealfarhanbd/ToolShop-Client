import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate();
    const { orderID } = useParams();
    const [orderItem, setOrderItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tool/${orderID}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderItem(data));

    }, [orderID]);
    console.log(orderItem)
    const [user, loading, error] = useAuthState(auth);
    const handleOrder = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const order = {
            orderId: orderItem._id,
            productname: orderItem.productname,
            useremail: user.email,
            username: user.displayName,
            quantity: orderItem.quantity,
            price: orderItem.price,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/order', {
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
                }
                else {
                    toast(`Already have and order on ${orderItem.productname} `)
                }
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" placeholder="Type here" value={orderItem.productname} class="input input-bordered input-success w-full max-w-xs" />
                            <input type="text" placeholder="Type here" value={orderItem.quantity} class="input input-bordered input-success w-full max-w-xs" />
                            <input type="text" placeholder="Type here" value={orderItem.price} class="input input-bordered input-success w-full max-w-xs" />
                            <input type="text" placeholder="Type here" disabled value={user?.displayName || ''} class="input input-bordered input-success w-full max-w-xs" />
                            <input type="text" placeholder="Type here" disabled value={user?.email || ''} class="input input-bordered input-success w-full max-w-xs" />
                            <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered input-success w-full max-w-xs" />
                            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                        </form>
                    </div>
                </div>

                <div>
                    <figure><img src={orderItem.img} alt="Shoes" className='w-80' /></figure>
                    <h1 className="text-5xl font-bold">{orderItem.productname}</h1>
                    <p className="py-6">{orderItem.description}</p>
                </div>
            </div>
        </div>



        //     <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //             <figure><img src={orderItem.img} alt="Shoes" className='w-20' /></figure>
        //             <div className="card-body">
        //             <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
        //             <input type="text" placeholder="Type here" value={orderItem.productname} class="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" placeholder="Type here" value={orderItem.quantity}  class="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" placeholder="Type here" value={orderItem.price}  class="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" placeholder="Type here" disabled value={user?.displayName || ''} class="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" placeholder="Type here" disabled value={user?.email || ''}  class="input input-bordered input-success w-full max-w-xs" />
        //             <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered input-success w-full max-w-xs" />
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