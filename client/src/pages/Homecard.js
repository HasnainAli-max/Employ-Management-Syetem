import React, { useEffect, useState } from 'react';
import './Homecard.css'

const Homecard = () => {
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

    // const DeleteUser = async(id) =>{
    //     let result = await fetch(`http://localhost:7000/getdata/${id}`,{
    //         method: 'DELETE',

    //     });
    //     result = await result.json();
    //     if(result){
    //         listOfUsers();
    //         alert('User deleted successfully')
    //     }


    // }


    return (
        <> 
        <h1 className=' fw-bold fs-2' style={{marginTop:'100px'}}>Chop Chop, Our Food Categories</h1>
        <div className='d-flex fl  align-items-center justify-content-center ' style={{marginTop:'100px'}}>
            {
                data.products.slice(0, 1).map((ele) => {
                    return (
                        <>
                            <div className="bg-dark one" style={{ width: '100%', height: "300px" }}>
                                <img src={`http://localhost:7000/uploads/${ele.image}`}  className="text-white" alt={ele.name} height={300} width={330} />

                            </div>
                        </>
                    )
                })
            }
            {
                data.products.slice(1, 2).map((ele) => {
                    return (
                        <>
                            <div className="bg-dark two" style={{ width: '100%', height: "300px" }}>
                            <img src={`http://localhost:7000/uploads/${ele.image}`}  className="text-white" alt={ele.name} height={300} width={330} />

                            </div>
                        </>
                    )
                })
            }
            {
                data.products.slice(2, 3).map((ele) => {
                    return (
                        <>
                            <div className="bg-dark three" style={{ width: '100%', height: "300px" }}>
                            <img src={`http://localhost:7000/uploads/${ele.image}`}  className="text-white" alt={ele.name} height={300} width={330} />

                            </div>
                        </>
                    )
                })
            }
            {
                data.products.slice(3, 4).map((ele) => {
                    return (
                        <>
                            <div className="bg-dark four" style={{ width: '100%', height: "300px" }}>
                            <img src={`http://localhost:7000/uploads/${ele.image}`}  className="text-white" alt={ele.name} height={300} width={330} />

                            </div>
                        </>
                    )
                })
            }
            {
                data.products.slice(4, 5).map((ele) => {
                    return (
                        <>
                            <div className="bg-dark five" style={{ width: '100%', height: "300px" }}>
                            <img src={`http://localhost:7000/uploads/${ele.image}`}  className="text-white" alt={ele.name} height={300} width={330} />
                            </div>
                        </>
                    )
                })
            }
        </div>
        </>

    );
};

export default Homecard;