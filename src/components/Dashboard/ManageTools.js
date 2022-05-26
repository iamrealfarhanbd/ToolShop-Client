import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageTools = () => {
    const [tools , setTools] = useState([])
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
                fetch(`https://toolshop-server.herokuapp.com/tool/${id}`, {
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
                    'Your tool has been deleted.',
                    'success'
                )
            }
        })

    }

    useEffect(()=>{
        fetch('https://toolshop-server.herokuapp.com/tool')
        .then(res=> res.json())
        .then(tool=>setTools(tool))
    },[tools])
    return (
        <div>
        <h2>All Orders : {tools.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>product name</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.productname}</td>
                            <td>{a.quantity}</td>
                            <td>{a.price}</td>
                            <td><button className='btn btn-xs btn-secondary' onClick={() => handleDelete(a._id)}>Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageTools;