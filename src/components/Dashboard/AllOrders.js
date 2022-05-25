import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AllOrders = () => {
    const [orders , setOrders] = useState([])

    const handleOrder = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                }

            })
    }



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/order/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=> res.json())
        .then(order=>setOrders(order))
    },[orders])
    return (
        <div>
        <h2>All Orders : {orders.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>product name</th>
                        <th>provider name</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.productname}</td>
                            <td>{a.useremail}</td>
                            <td>{a.quantity}</td>
                            <td>{a.price}</td>
                            <td>
                                {(a.price && !a.paid) &&
                                    <>
                                       <span className='text-success mx-2'>Unpaid</span>
                                        <button className='btn btn-xs btn-secondary' onClick={() => handleDelete(a._id)}>Cancel</button>
                                    </>
                                }
                                {(a.Shipped && a.Shipped) && <div>
                                  

                                    <p><span className='text-success'>shipped</span></p>
                                </div>}
                                {(a.paid && !a.Shipped) && <div>
                                    <button onClick={() => handleOrder(a._id)}className='btn btn-xs btn-primary mx-2'>pending</button>

                                    
                                </div>}
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllOrders;