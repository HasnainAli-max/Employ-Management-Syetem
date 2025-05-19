import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'

const Footer = () => {
    return (

        <section id="footer">
            <div className="container ">
                <div className="row text-center text-xs-center text-sm-left text-md-left p-5">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><Link to='/home' ><i className="fa fa-angle-double-right" />Home</Link></li>
                            <li><Link to='/menu' ><i className="fa fa-angle-double-right" />Menu</Link></li>
                            <li><Link to='/japanes' ><i className="fa fa-angle-double-right" />JapanesFood</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><Link to='/deals' ><i className="fa fa-angle-double-right" />Deals</Link></li>
                            <li><Link to='/menu' ><i className="fa fa-angle-double-right" />OrderNow</Link></li>
                            <li><Link to='/location' ><i className="fa fa-angle-double-right" />OurLocation</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><Link to='/home' ><i className="fa fa-angle-double-right" />ContactUs</Link></li>
                            <li><Link to='/policy' ><i className="fa fa-angle-double-right" />PrivacyPolicy</Link></li>
                            
                        </ul>
                    </div>
                    
                </div>
            
                <hr />
                <div className="row p-3">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6 text-dark">© All right Reversed.<Link className="text-green ml-2" target="_blank">Sunlimetech</Link></p>
                    </div>
                </div>
            </div>
        </section>




    )
}

export default Footer
