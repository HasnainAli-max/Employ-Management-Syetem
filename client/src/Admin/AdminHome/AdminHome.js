import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    const [data, setData] = useState({ products: [] });
    const url = 'http://localhost:7000/getdata';

    const listOfUsers = async () => {
        let result = await fetch(url)
        result = await result.json()
        setData(result)
        // console.log(data.products)
    };
    useEffect(() => {
        listOfUsers();
    }); 

const DeleteUser = async(id) =>{
    let result = await fetch(`http://localhost:7000/getdata/${id}`,{
        method: 'DELETE',
    
    });
    result = await result.json();
    if(result){
        listOfUsers();
        alert('Product deleted successfully')
    }
    
    
}


    return (
        <div className="container py-4 " style={{ marginTop: '100px' }}>
                        <div className="row">
                            {
                                data.products.map((ele) => {
                                    return (
                                        <div className="col-md-3 col-sm-6 mb-4">
                                            <div className="card h-100">
                                                <Link to={`${ele._id}`}>
                                                    <img alt="A bowl of NOVU Special Soup with chicken and prawn" className="card-img-top" src={`http://localhost:7000/uploads/${ele.image}`} height={280} />
                                                </Link>
                                                <div className="card-body text-center">

                                                    <h5 className="card-title">{ele.name}</h5>
                                                    <p className="card-text text-muted">{ele.description}</p>
                                                    <p className="font-weight-bold">{ele.price}</p>
                                                <button onClick={()=>DeleteUser(ele._id)} className="btn btn-warning w-50">Delete</button> 
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
        
                        </div>
                    </div>
    );
};

export default AdminHome;