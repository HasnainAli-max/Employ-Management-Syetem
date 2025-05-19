import axios from 'axios';
import React, { useState } from 'react';
import './PostProducts.css'

const PostProducts = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [file, setFile] = useState(null); 

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handleQuantityChange = (e) => {
      setQuantity(e.target.value);
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const addUserData = async (e) => {
        e.preventDefault();
        
        // Validate input fields
        if (!name || !price || !description || !quantity || !file ) {
            alert('Please fill in all fields and select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('quantity', quantity);
        formData.append('photo', file);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        try {
            const res = await axios.post("http://localhost:7000/registerr", formData, config);
            if (res.status === 201) {
                alert('Product  added successfully');
                // Reset form fields
                setFile(null);
                setName('');
                setPrice('');
                setDescription('');
                setQuantity('');
            }
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Failed to add user. Please try again.');
        }
    };

    return (
      <>
      
<div className="container h-100">
  <div className="row h-100">
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="mb-5">Add Products</h1>
          
        </div>
        <div className="card">
          <div className="card-body">
            <div className="m-sm-4 ">
              <form className=''  onSubmit={addUserData}>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control form-control-lg" type="text" name="name" value={name} onChange={handleNameChange} required placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input className="form-control form-control-lg" type="number" name="price" value={price} onChange={handlePriceChange} required placeholder="Enter your price " />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input className="form-control form-control-lg" type="text" name="description"  value={description} onChange={handleDescriptionChange} required placeholder="Enter your description" />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input className="form-control form-control-lg" type="number" name="quantity"  value={quantity} onChange={handleQuantityChange} required placeholder="Enter your quantity" />
                </div>
                <div className="form-group">
                  <label>Chose Your file</label>
                  <input className="form-control form-control-lg"  type='file' onChange={handleFileChange} name='photo' accept="image/*" required  />
                </div>
                <div className="text-center mt-3">
                  <button  className="btn btn-lg btn-dark">Submit</button>
                  {/* <button type="submit" class="btn btn-lg btn-primary">Sign up</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        
      </>

    );
};

export default PostProducts;