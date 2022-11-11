import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ProductPreViewModal from './ProductPreViewModal';


const ProductTag = (props) => {
    const { product } = props;
    const id = product.TieuDe;
    return (
        <>
            <div className="col-lg-4 col-sm-6">
                <div className="product-box" key={product.MaSp}>
                    <div className="product-media">
                        <img className="prod-img" alt="" src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667578469/products/${product.DuongDan}`} />
                        <img className="shape" alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/shap-small.png" />
                        <div className="prod-icons">
                            <a href="#" className="fa fa-heart"></a>
                            <a href="#" className="fa fa-shopping-basket"></a>
                            <a href="#product-preview" className="fa fa-expand" data-bs-toggle="modal" data-bs-target="#product-preview"></a>
                        </div>
                    </div>
                    <div className="product-caption">
                        <h3 className="product-title">
                            <NavLink to={`/product-detail/${id+`_`+product.MaSp}`}> {product.TenSp}</NavLink>
                        </h3>
                        <div className="price">
                            <strong className="clr-txt">${product.DonGiaKm} </strong> <del className="light-font">${product.DonGiaBan} </del>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductTag;