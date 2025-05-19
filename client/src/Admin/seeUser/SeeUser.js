import React, { useEffect, useState } from 'react';
import './SeeUser.css';
import { Link } from 'react-router-dom';

const SeeUser  = () => {
    const [user, setUsers] = useState([]);

    const userUrl = "http://localhost:7000/list";

    const listOfUsers = async () => {
        let result = await fetch(userUrl);
        result = await result.json();
        setUsers(result);
    };

    useEffect(() => {
        listOfUsers();
    }, []); // No changes needed here

    const deluser = async (id) => {
        let result = await fetch(`http://localhost:7000/list/${id}`, {
            method: 'DELETE',
        });
        if (result.ok) { // Check if the deletion was successful
            listOfUsers();
        }
    };

    return (
        <>
       
        <div className="container mb-5">

            <h4>Total Users<span className='p-2 text-primary'>({user.length})</span></h4>
            <div className="row align-items-center">
                <div className="col-md-6">
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table project-list-table table-nowrap align-middle table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">SN0</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col" style={{ width: 200 }}>Contact</th>
                                    <th scope="col" style={{ width: 200 }}>Role</th>
                                    <th scope="col" style={{ width: 200 }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((item, index) => (
                                        <tr key={item._id}> {/* Use item._id as key */}
                                            <td>{index + 1}</td>
                                            <td>
                                                <p href="#" className="text-body">{item.name}</p>
                                            </td>
                                            <td><span className="badge badge-soft-success mb-0">{item.email}</span></td>
                                            <td>{item.address}</td>
                                            <td>{item.contact}</td>
                                            <td>{item.role}</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <p  data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger">
                                                            <i onClick={() => deluser(item._id)} className="bx bx-trash-alt font-size-18" />
                                                        </p>
                                                        
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to={`/adminuser/${item._id}`}  data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger">
                                                        <i class="fa-sharp text-black-50 fa-solid fa-eye"></i>
                                                    </Link>
                                                        
                                                    </li>
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default SeeUser ;