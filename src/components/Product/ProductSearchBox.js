import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductSearchBox extends Component {
    render() {
        return (
            <>
                <div className='search-box-home'>
                    <span className='search-title'>Did you find some thing</span>
                    <div className='search-box-content'>
                        <p>Product suggest</p>
                        <ul className='product-suggest'>
                            <li className='product-suggest-item'>
                                <Link to="/products">
                                    <div className='product-suggest-img'>
                                        <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/2.png" />
                                    </div>
                                    <div className='product-suggest-info'>
                                        <h5>rau cu tuoi ngon</h5>
                                        <div className="price fontbold-2">
                                            <strong className="fsz-20">$50.00 </strong> <del className="light-font"> <b>$65.00</b> </del>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className='product-suggest-item'>
                                <Link to="/products">
                                    <div className='product-suggest-img'>
                                        <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/4.png" />
                                    </div>
                                    <div className='product-suggest-info'>
                                        <h5>rau cu tuoi ngon</h5>
                                        <div className="price fontbold-2">
                                            <strong className="fsz-20">$50.00 </strong> <del className="light-font"> <b>$65.00</b> </del>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className='product-suggest-item'>
                                <Link to="/products">
                                    <div className='product-suggest-img'>
                                        <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/3.png" />
                                    </div>
                                    <div className='product-suggest-info'>
                                        <h5>rau cu tuoi ngon</h5>
                                        <div className="price fontbold-2">
                                            <strong className="fsz-20">$50.00 </strong> <del className="light-font"> <b>$65.00</b> </del>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
