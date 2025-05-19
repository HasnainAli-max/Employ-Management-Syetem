import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const  JapanesFood  = () => {
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




    return (
        <div className="container py-4 mt-5">
        <div className="row">
            {
                data.products.slice(0, 4).map((ele) => {
                    return (
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card h-100">
                                <Link to={`${ele._id}`}>
                                <img alt="A bowl of NOVU Special Soup with chicken and prawn" className="card-img-top" src={`http://localhost:7000/uploads/${ele.image}`} height={280} />
                                </Link>
                                <div className="card-body text-center">
                                    <button className="btn btn-warning text-white w-25  mb-2">
                                        <i className="fas fa-plus" />
                                    </button>
                                    <h5 className="card-title">{ele.name}</h5>
                                    <p className="card-text text-muted">{ele.description}</p>
                                    <p className="font-weight-bold">{ele.price}</p>
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


export default  JapanesFood

