import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {

let result = useSelector((state)=>state.cartReducer.carts)
console.log("data in navbar " , result);


  let navigate = useNavigate();
  let auth = localStorage.getItem('token');
  let rol = localStorage.getItem('role');
  // console.log(rol)
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <>
      <div className='main-nav'>
        <div className='offnaveee'>
          <button
            className="fs-3 but"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="fa-duotone fa-solid fa-bars"></i>
          </button>
          <div
            className="offcanvas offcanvas-start w-50"
            data-bs-scroll="true"
            tabIndex={-1}
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header d-flex justify-content-between border-bottom">
              <img src={logo} alt='' className='w-50' />
              <button
                type="button"
                className="btn-close text-black-50"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            {auth ? (
              <div className="offcanvas-body d-flex flex-column align-items-start mt-4">
                <div className='border-bottom border-dark w-100 d-flex align-items-start'>
                  <Link className=' p-2 text-dark' to='/home'>Home</Link>
                </div>
                <div className='border-bottom border-dark w-100 d-flex align-items-start'>
                  <Link className=' p-2 text-dark' to='/menu'>Menu</Link>
                </div>
                <div className='border-bottom border-dark w-100 d-flex align-items-start'>
                  <Link className=' p-2 text-dark' to='/menu'>Japanese Food</Link>
                </div>
                <div className='border-bottom border-dark w-100 d-flex align-items-start'>
                  <Link className=' p-2 text-dark' to='/menu'>Deals</Link>
                </div>
                <div className='border-bottom border-dark w-100 d-flex align-items-start'>
                  <Link className=' p-2 text-dark' to='/menu'>Our Location</Link>
                </div>
                <div className='border-bottom border-dark w-100 d-flex align-items-start'>
                  <Link className=' p-2 text-dark' to='/menu'>Contact Us</Link>
                </div>
              </div>
            ) : (
              <div className="offcanvas-body d-flex flex-column align-items-start mt-4">
                <div className='border-bottom border-dark w-100 d-flex align-items-start'>
                  <Link className=' p-2 text-dark' to='/login'>Login</Link>
                </div>
                <div className='border-bottom border-dark w-100 d-flex align-items-start'>
                  <Link className=' p-2 text-dark' to='/register'>Sign-Up</Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {auth ? (
          <>
            <div className='nav-child-1'>
              {rol === '2' ? (
                <>
                  <Link to='/adminuser'>See All Users</Link>
                  <Link to='/photo'>Add Products</Link>
                  <Link to='/adminh'>Admin Home</Link>
                </>
              ) : (
                <>
                  <Link to='/home'>Home</Link>
                  <Link to='/menu'>Menu</Link>
                  <Link to='/japanes'>Japanese Menu</Link>
                </>
              )}
            </div>
            <div className='nav-child-2'>
                <img src={logo} alt='' />
            </div>
            <div className='text-dark ch d-flex gap-3 p-4'>

              <div className='ch'>
                <Link to='/cart' className="fa-sharp fa-solid fa-bag-shopping text-dark"></Link>
              </div>
            </div>
            <div className='nav-child-3'>
              {
                rol=== '2' ?(
              <button className=' deal bg-success ' onClick={logout}>Logout</button>
                )
                :
                (

                  <>
                  <Link to="/deals" className='deal'>Deals</Link>
              <Link to="/menu" className='order'>OrderNow</Link>
              <button className=' deal bg-success ' onClick={logout}>Logout</button>
                  </>
                )
              }
              {/* <Link to="/deals" className='deal'>Deals</Link>
              <Link to="/menu" className='order'>OrderNow</Link>
              <button className=' deal bg-success ' onClick={logout}>Logout</button> */}

              <div className='text-dark ch d-flex gap-3 p-4'>
                <div className=''>
                  {
                    rol === '2' ? (null) :(
                  <Link to='/cart' className="fa-sharp fa-solid fa-bag-shopping text-dark">{result.length}</Link>
                    )
                  }
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='nav-child-1'>
              <div className='ch'>
                {/* <Link to='/login' className="fa-solid fa-user text-dark"></Link> */}
              </div>
            </div>
            <div className='nav-child-2'>
              
                <img src={logo} alt='' />
              
            </div>
            <div className='text-dark ch d-flex gap-3 p-4'>
              <div className='ch'>
                {/* <Link to='/register' className=" text-dark">Register</Link> */}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
