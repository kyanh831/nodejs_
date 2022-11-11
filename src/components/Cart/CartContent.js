import React, { Component } from 'react'
import CartItem from './CartItem'

export default class CartContent extends Component {
    render() {
        return (
            <>
                <form className="cart-form">
                    <table className="product-table">
                        <thead className="">
                            <tr>
                                <th>product detail</th>
                                <th></th>
                                <th>Product price</th>
                                <th>quantity</th>
                                <th>total price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </tbody>
                    </table>
                    <div className="continue-shopping">
                        <div className="left">
                            <h6>ENTER VOUCHER CODE IF YOU HAVE ONE. <span className="clr-txt-2"> APPLY HERE </span> </h6>
                            <div className="coupan-form">
                                <input className="form-control" />
                                <button className="btn" type="submit"> APPLY CODE </button>
                            </div>
                        </div>
                        <div className="right"> <strong className="fsz-20 fontbold-2">Subtotal : <span className="clr-txt"> $150.00 </span> </strong> </div>
                    </div>
                    <div className="shp-btn col-sm-12 text-center">
                        <button className="theme-btn-2 btn"> <b> CONTINUE SHOPPING </b> </button>
                        <button className="theme-btn-3 btn"> <b> CHECKOUT NOW </b> </button>
                    </div>
                </form>

            </>

        )
    }
}
