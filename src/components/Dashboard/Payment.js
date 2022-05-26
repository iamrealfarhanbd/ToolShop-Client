import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JdyxQKFiz57BFQf4YqchniMjoXzuhl7BhFRpnRge4BM4F9Wi9kem6yGB3O2tTcutLOMh5suUqF9EP5I7v0X9iDr00SH5YMqT6');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {

        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(order);
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='form-control w-full items-center max-w-full m-auto my-10'>
        <h2 className='text-2xl font-bold text-green-500'>This is your payment dashboard</h2>

            <div className="card w-50 max-w-md  bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order.username}</p>
                    <p className="card-title">Order ID: <span className='text-orange-700'> {order._id}</span></p>
                    <h2 className="card-title">Please Pay for {order.productname}</h2>
                    <h2 className="card-title">Quantity: {order.quantity}</h2>
                    <p className="card-title">Please pay: <span className='text-green-400'> ${order.price}</span></p>
                </div>
                <div className="card-body bg-sky-900">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;