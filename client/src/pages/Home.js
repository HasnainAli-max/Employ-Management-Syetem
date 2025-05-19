
import CI from '../assets/467895135_1106996144802468_27213471203369949_n.jpg'
import CJ from '../assets/img.webp'
import './Home.css'
import React, { useEffect, useState } from 'react';
import Homecard from './Homecard';
import { Link } from 'react-router-dom';
import imgone from '../assets/3.png'
import imgtwo from '../assets/Screenshot 2024-12-18 at 8.41.58 PM.png'
import ImageSlider from './ImageSlider';
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/Aaction';



const Home = () => {

let dispatch = useDispatch()

const addShopingCart = (ele) => {
    dispatch(addCart(ele))
}
    const [data, setData] = useState({ products: [] });
    const url = 'http://localhost:7000/getdata';

    const listOfUsers = async () => {
        let result = await fetch(url)
        result = await result.json()
        setData(result)
        //   console.log(data.products)
    };
    useEffect(() => {
        listOfUsers();
    });

    // const DeleteUser = async(id) =>{
    //   let result = await fetch(`http://localhost:7000/getdata/${id}`,{
    //       method: 'DELETE',

    //   });
    //   result = await result.json();
    //   if(result){
    //       listOfUsers();
    //       alert('User deleted successfully')
    //   }


    // }

    return (
        <>
            <div>
                <img className='carouselimg' src={CI} alt="carousel " style={{ height: "650px", width: "100%" }} />
                <img className='carouselimgtwo' src={CJ} alt="carousel " style={{ height: "400px", width: "100%" }} />
            </div>



            <h1 className='fw-bold fs-2' style={{ marginTop: '100px' }}>Our Best Selling Dishes</h1>

            <div className="container py-4 " style={{ marginTop: '100px' }}>
                <div className="row">
                    {
                        data.products.slice(0, 4).map((ele) => {
                            return (    
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="card h-100">
                                        <Link to={`${ele._id}`}>
                                            <img alt='' className="card-img-top" src={`http://localhost:7000/uploads/${ele.image}`} height={280} />
                                        </Link>
                                        <div className="card-body text-center">
                                            <button onClick={()=>addShopingCart(ele)}  className="btn btn-warning text-white w-25  mb-2">
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

            {/* <div className="container mt-5">
                <div className="section-heading ">
                    <h2 className="h1 mt-5 fw-bold fs-2">Best Selling Dishes</h2>
                </div>
                <div className="row position-relative mt-n1-9 gap-5 mt-5">
                {
    data.products.slice(0, 4).map((ele) => {
        return (
            <div className="card" style={{ width: '18rem' }} key={ele._id}>
                <img src={`http://localhost:7000/uploads/${ele.image}`} className="card-img-top" alt={ele.name} />
                <div className="card-body">
                    <h5 className="card-title">{ele.name}</h5>
                    <p className="card-text">{ele.description}</p>
                    <Link to={`/home/${ele._id}`} className="stretched-link">View Details</Link>

                </div>
            </div>
        );
    })
}
                </div>
            </div> */}
            <Homecard />
            <Link className='btn btn-warning btn-xl mt-5 mb-2 ' to='/menu'>View All</Link>
            <img className='rimg ' src={imgone} alt='' style={{ width: "100%", marginTop: "150px" }} />




            <h1 className=' fw-bold fs-2' style={{ marginTop: '100px' }}>Top Recomended Dishes</h1>

            <div className="container py-4" style={{ marginTop: '100px' }}>
                <div className="row">
                    {
                        data.products.slice(0, 4).map((ele) => {
                            return (
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="card h-100">
                                        <Link to={`${ele._id}`}>
                                            <img alt="" className="card-img-top" src={`http://localhost:7000/uploads/${ele.image}`} height={280} />
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



            <img className='simg ' src={imgtwo} alt='' style={{ width: "100%", marginTop: "120px" }} />
            <h2 className="h1 mt-5 fw-bold fs-1">Join Us On Instagram</h2>


            <ImageSlider />
        </>

    )
}


export default Home




