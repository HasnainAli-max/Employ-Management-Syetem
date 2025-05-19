import React, { useState } from 'react'
import Swal from 'sweetalert2'
import './Register.css'
import { Link } from 'react-router-dom'


const Register = () => {

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[address, setAddress] = useState('')
  const[contact, setContact] = useState('')


 let url = "http://localhost:7000/newregister"

 const registerUser = async(e) =>{
  e.preventDefault()
      let result = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password, address, contact})
      })
      result = await result.json()
      if(result.user){
        Swal.fire({
          title: "Welcome" + result.user.name,
          text: result.Message,
          icon: "success"
        });
      }
      

      // console.log(result)      
      // console.log("Message -> ",result.Message)      

 }



  return (


<div>
<div className='w-100 d-flex align-items-center justify-content-end'>
        <div className='w-25 d-flex align-items-center justify-content-center'>
          
        <Link to='/login' className='w-25 btn btn-warning '>Login</Link>
        </div>
      </div>
<div className='body'>
            <div className='login-box'>
                <form onSubmit={registerUser }> {/* Changed here */}
                    <h2>Sign-up</h2>
                    <div className='input-box'>
                        <span className='icon'>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
                        <label>Name</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'>
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label>Email</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'>
                            <i className="fa-solid fa-lock"></i>
                        </span>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label>Password</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'>
                            <i className="fa-solid fa-location-pin"></i>
                        </span>
                        <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} required />
                        <label>Address</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'>
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <input type='text' value={contact} onChange={(e) => setContact(e.target.value)} required />
                        <label>Contact</label>
                    </div>
                    <button type='submit'>Register</button>
                    <div className='register-link'>
                        <p>I have an account <Link to='/login' >Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </div>



  )
}

export default Register
