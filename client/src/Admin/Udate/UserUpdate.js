import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserUpdate = () => {
    let params = useParams();
    let navigate = useNavigate();
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');    
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [role, setRole] = useState('');

    const getSingleUser  = async () => {
        let result = await fetch(`http://localhost:7000/list/${params.id}`);
        result = await result.json();
        setName(result.name);
        setEmail(result.email);      
        setAddress(result.address);
        setContact(result.contact);
        setRole(result.role); // Corrected this line
    };

    const updateUser  = async (e) => {
        e.preventDefault();
        let result = await fetch(`http://localhost:7000/users/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, email, address, contact, role }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        result = await result.json();
        navigate('/adminuser');
       
    };

    useEffect(() => {
        getSingleUser();
    }, []);

    return (
        <div className="container w-25 bg-light mt-5 mb-5">
            <form className="p-3" onSubmit={updateUser }>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        User Name
                    </label>
                    <input name="name" onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="useraddress" className="form-label">
                        User Address
                    </label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)} name="address" value={address} className="form-control" id="useraddress" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userphone" className="form-label">
                        User Contact
                    </label>
                    <input type="text" onChange={(e) => setContact(e.target.value)} name="contact" value={contact} className="form-control" id="userphone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userrole" className="form-label">
                        User Role
                    </label>
                    <input type="text" onChange={(e) => setRole(e.target.value)} name="role" value={role} className="form-control" id="userrole" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Record
                </button>
            </form>
        </div>
    );
};

export default UserUpdate;