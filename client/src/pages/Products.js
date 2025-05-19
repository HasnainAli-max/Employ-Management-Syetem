import React, { useEffect, useState } from 'react';

const Products = () => {
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
        alert('User deleted successfully')
    }
}


    return (
        <div>
            <div className="container">
                <div className="section-heading mb-4">
                    <h2 className="h1 mb-0">Hover the cards</h2>
                </div>
                <div className="row position-relative mt-n1-9 gap-5">
                    {
                        data.products.map((ele) => {
                            return (
                                <>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={ele.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{ele.name}</h5>
                                            <p className="card-text">{ele.description}</p>
                                            <button onClick={()=>DeleteUser(ele._id)} className="btn btn-warning w-50">Delete</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;