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
        <div>
            <h2>Hello</h2>
            <p className="text-success font-bold">Hello, {id}</p>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order.username}</p>
                    <h2 className="card-title">Please Pay for {order.productname}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{order.date}</span> at {order.slot}</p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;