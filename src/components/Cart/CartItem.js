import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        return (
            <>
                <tr>
                    <td className="image">
                        <div className="white-bg">
                            <a className="media-link" href="#"><img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/cart-1.png" alt="" /></a>
                        </div>
                    </td>
                    <td className="description">
                        <div className="rating">
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                        </div>
                        <h6 className="fsz-12 gray-color"> Overall Rating : 5/5 </h6>
                        <div className="divider-2"></div>
                        <h3 className="product-title no-margin"> <a href="#"> <span className="light-font">organic </span> <strong>almonds </strong> </a> </h3>
                        <h6>DRY FRUITS</h6>
                    </td>
                    <td>
                        <div className="price fontbold-2">
                            <strong className="fsz-20">$50.00 </strong> <del className="light-font"> <b>$65.00</b> </del>
                        </div>
                    </td>
                    <td>
                        <div className="prod-btns fontbold-2">
                            <div className="quantity">
                                <button className="btn minus"><i className="fa fa-minus-circle"></i></button>
                                <input title="Qty" placeholder="03" className="form-control qty" type="text" />
                                <button className="btn plus"><i className="fa fa-plus-circle"></i></button>
                            </div>

                        </div>
                    </td>
                    <td>
                        <strong className="clr-txt fsz-20 fontbold-2">$50.00</strong> <a href="#" className="remove fa fa-close clr-txt"></a>
                    </td>
                </tr>
            </>

        )
    }
}
