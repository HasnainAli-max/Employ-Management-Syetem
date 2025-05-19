import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Login.css'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // localStorage.getItem('role');

  let navigate = useNavigate()
  
  const signInUser = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:7000/login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
      // credentials: 'include'
    })
    result = await result.json();
    console.log(result)
    if (result.user) {
      localStorage.setItem("token", JSON.stringify(result.token))
      localStorage.setItem("email", JSON.stringify(result.user.email))
      localStorage.setItem("role", JSON.stringify(result.user.role))
        // navigate('/home')
        // console.log(auth)
      if (result.user.role === 2 ) {
        navigate('/adminh')
      }
      else {
        navigate('/home')
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.Message,
        footer: '<a href="#">Please provide correct detail?</a>'
      });
    }


    


  }
  

  return (

    <div>
      <div className='w-100 d-flex align-items-center justify-content-end'>
        <div className='w-25 d-flex align-items-center justify-content-center'>
          
        <Link to='/register' className='w-25 btn btn-warning '>Register</Link>
        </div>
      </div>
      <div className="body ">
        <div className="login-bo">
          <form >
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input type="text" onChange={(e) => setEmail(e.target.value)} name='email' value={email} className="" aria-describedby="emailHelp" />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' value={password} className="" />

              <label>Password</label>
            </div>
            <button onClick={signInUser} type="submit" className="">Login</button>

            <div className="register-link">
              <p >
                Don't have an account <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>



  )
}

export default Login
