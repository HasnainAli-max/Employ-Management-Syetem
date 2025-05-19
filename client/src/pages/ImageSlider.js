import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import { Link } from 'react-router-dom'

const ImageSlider = () => {
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
  return (
    <div className="accordian">
  <ul>
    {
      data.products.map((ele)=>{
        return(
          <li>
      <div className="image_title">
        <Link>{ele.name}</Link>
      </div> 
      <Link to={`${ele._id}`}>
      <img alt="A bowl of NOVU Special Soup with chicken and prawn" className="" src={`http://localhost:7000/uploads/${ele.image}`} height={319}  width={700} />
      </Link>
    </li>
        )
      })
    }
    
    
    
    
  </ul>
</div>

  )
}

export default ImageSlider
