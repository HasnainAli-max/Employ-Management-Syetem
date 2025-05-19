import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Detail.css'


const Detail = () => {

 

    const [data, setData] = useState({ products: [] });
    const { id } = useParams();  // import useParams from react-router-dom
    const url = `http://localhost:7000/getdata/${id}`;

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
        <div className="container bootdey">
            <div className="col-md-12">
                <section className="panel">
                    <div className="panel-body">
                        <div className="col-md-6">
                            <div className="pro-img-details">
                                <img src={`http://localhost:7000/uploads/${data.image}`}  alt='' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className="pro-d-title">
                                <Link to='' className>
                                    {data.name}
                                </Link>
                            </h4>
                            <p>
                                {data.description}
                            </p>
                            
                            <div className="m-bot15"> <strong>Price : </strong>  <span className="pro-price">{data.price}</span></div>
                            <div className="form-group">
                                <label>Quantity</label>
                                {/* <input type="quantiy" placeholder={1} className="form-control quantity" /> */}
                            </div>
                            <p>
                                <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Detail
