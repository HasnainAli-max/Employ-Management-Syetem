import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, deleteOneItem, removeItem } from '../Redux/Aaction';

const Cart = () => {
  let result = useSelector((state)=>state.cartReducer.carts)
console.log("data in carts " , result);

  let dispatch = useDispatch()

const send = (e) => {
  dispatch(addCart(e))
}

const removeSingleItem = (item) => {
  dispatch(deleteOneItem(item))
}


const clearCart = (id) => {
dispatch(removeItem(id))
}
  return (
    <div className='p-5 mb-5'>
      {/* <h2>Cart</h2> */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-lg-9">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Item</th> 
                  <th scope="col"></th>
                  <th scope="col">Price</th>
                  <th scope="col">QTY</th>
                  <th scope="col">Total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  result.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={`http://localhost:7000/uploads/${item.image}`} width={80} height={40}/>
                      </td>
                      <td>{item.description}...</td>
                      <td>{item.price}</td>
                      <td className='d-flex'>
                        <button onClick={()=>send(item)} className="btn btn-dark btn-sm me-2">+</button>
                            {item.quantity}
                        <button onClick={item.quantity <=1 ? ()=>clearCart(item._id) : ()=>removeSingleItem(item)}  className="btn btn-dark btn-sm ms-2">-</button>
                        
                      
                      </td>
                      <td>
                      Rs.{item.price*item.quantity}
                      </td>
                      <td>
                        <i onClick={()=>clearCart(item._id)} className="bx bx-trash-alt font-size-18"></i>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="col-lg-2">summary</div>
        </div>
      </div>
    </div>
  )
}

export default Cart
