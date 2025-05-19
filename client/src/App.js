import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Errorpage from './pages/Errorpage'
// import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import Userslist from './pages/Userslist'
import Navbar from './components/Navbar';
import Protectedcomp from './components/Protectedcomp';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Bar from './components/Bar/Bar';
import Sbar from './components/Bar/Sbar';
import Menu from './pages/Menu/Menu';
import JapanesFood from './pages/JapanesFood/JapanesFood';
import SeeUser from './Admin/seeUser/SeeUser';
import PostProducts from './Admin/PostProducts/PostProducts';
import AdminHome from './Admin/AdminHome/AdminHome';
import Footer from './components/Footer';
import Deals from './pages/Deals/Deals';
import Detail from './pages/Detail/Detail';
import UserUpdate from './Admin/Udate/UserUpdate';
import CheckOut from './pages/Checkout/CheckOut';
// import UserDetail from './Admin/userDetail/UserDetail';



function App() {

  // let email = localStorage.getItem('email');
  return (
    <div className="App">
      <BrowserRouter>
      {/* {email === "ha3710191@gmail.com" ? <Navbar />:   <Bar /> } */}
      <Bar /> 
        <Sbar />
        <Navbar />
        <Routes>
          <Route element={<Protectedcomp />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<Detail />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/users" element={<Userslist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Errorpage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<Detail />} />
            <Route path="/japanes" element={<JapanesFood />} />
            <Route path="/japanes/:id" element={<Detail />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/deals/:id" element={<Detail />} />
            <Route path="/deals/:id" element={<Detail />} />
            {/* admin routes  */}
            <Route path="/adminuser" element={<SeeUser />} />
            <Route path="/adminuser/:id" element={<UserUpdate />} />
            <Route path="/adminh" element={<AdminHome />} />
            <Route path="/photo" element={<PostProducts />} />
            <Route path="/chk" element={<CheckOut />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="UserDetail" element={<UserDetail />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
