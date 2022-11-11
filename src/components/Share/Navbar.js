import React, { Component } from 'react'

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import ProductSearchBox from '../Product/ProductSearchBox';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isScrollToTop: false,
            isShowPopupUserInfo: false,
        }
    }
    handlePopupUserInfo = () => {
        this.setState({
            isShowPopupUserInfo: !this.state.isShowPopupUserInfo
        })
    }
    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll, true);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    // handleScroll = () => {
    //     if (window.scrollY < 3) {
    //         this.setState({ isScrollToTop: true })
    //     } else {
    //         this.setState({ isScrollToTop: false })
    //     }
    // };
    render() {

        return (
            <>
                <nav className='navbar navbar-expand-lg style-2 main-header '>
                    <div className="container-fluid">
                        <NavLink className="navbar-brand main-logo col-lg-3 col-sm-6" to="/">
                            <img src='/logo/main-logo.png' />
                            <span className='medium-font'>kyAnhStore247</span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-lg-7 col-md-7  col-sm-6 justify-content-end " id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0 primary-navbar ">
                                <li className="nav-item ">
                                    {/* search box */}
                                    <div className='search-menu-home'>
                                        <input type="text" placeholder="Find best sale..." />
                                        <i className="fa fa-magnifying-glass-arrow-right search-home"></i>
                                        {/* <ProductSearchBox /> */}
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blogs">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item nav-car">
                                    <div className='cart-megamenu'>
                                        <div className="cart-hover">
                                            <NavLink to="#"> <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/cart-icon-1.png" /> </NavLink>
                                            <span className="cnt crl-bg">2</span> <span className="price">$2.170.00</span>
                                            <ul className="pop-up-box cart-popup">
                                                <li className="cart-list">
                                                    <div className="cart-img"> <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/cart-sm-1.jpg" alt="" /> </div>
                                                    <div className="cart-title">
                                                        <div className="fsz-16">
                                                            <NavLink to="#"> <span className="light-font"> organic </span>  <strong>almonds</strong></NavLink>
                                                            <h6 className="sub-title-1">DRY FRUITS</h6>
                                                        </div>
                                                        <div className="price">
                                                            <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                                                        </div>
                                                    </div>
                                                    <div className="close-icon"> <i className="fa fa-close clr-txt"></i> </div>
                                                </li>

                                                <li className="cart-list sub-total">
                                                    <div className="pull-left">
                                                        <strong>Subtotal</strong>
                                                    </div>
                                                    <div className="pull-right">
                                                        <strong className="clr-txt">$150.00</strong>
                                                    </div>
                                                </li>
                                                <li className="cart-list buttons">
                                                    <div className="pull-left">
                                                        <NavLink to="/cart" className="theme-btn-sm-2">View Cart</NavLink>
                                                    </div>
                                                    <div className="pull-right">
                                                        <NavLink to="/" className="theme-btn-sm-3"> Checkout </NavLink>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="user-info">
                                        <div className='user-logo' >
                                            {/* <i className="fa fa-user" onClick={() => this.handlePopupUserInfo()}></i> */}
                                            {/* https://res.cloudinary.com/dkto9qg9y/image/upload/v1663760338/cld-sample.jpg */}
                                            <img src='https://res.cloudinary.com/dkto9qg9y/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1663760338/cld-sample.jpg' onClick={() => this.handlePopupUserInfo()}/>

                                        </div>
                                        <div className={`pop-up-box user-popup ${this.state.isShowPopupUserInfo ? 'active-popup' : 'hidden-popup'}`}>
                                            <ul >
                                                <li className='user-text-name'>Hello <strong>kyanh@gmail.com</strong></li>
                                                <li><NavLink className="user-text-info" to="#">My account</NavLink></li>
                                                <li><hr className="line" /></li>
                                                <li><NavLink className="user-text-logout" to="#">Logout<i className="fa fa-right-from-bracket "></i></NavLink></li>

                                                {/* <li className='user-text-name'> Wellcom!</li>
                                                <li><Link to='/' className="user-text-register" >Create new<i className="fa fa-user-plus"></i></Link></li>
                                                <li><hr className="line" /></li>
                                                <li><Link to='/login' className="user-text-login">Login<i className="fa fa-right-to-bracket "></i></Link></li> */}

                                            </ul>
                                        </div>

                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }

}
