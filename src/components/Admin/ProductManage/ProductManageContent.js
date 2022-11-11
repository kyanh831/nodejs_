import React, { Component } from 'react'
import { ProductTable } from './ProductTable'
class ProductManageContent extends Component {
    render() {
        return (
                <>
                   <div className='col-10 admin-home-content' style={{ height: "2000px" }}>
                    <div className='admin-user-heard'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin"><i className="fa-solid fa-house ms-2"></i> Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Product manage</li>
                            </ol>
                        </nav>
                    </div>
                    <div className='admin-user-content'>
                    <div className='statistic'>
                            <div className='item-statistic bg-light-blue'>
                            <i className="fa fa-apple-whole"></i>
                                <h5>Total products</h5>
                                <h3>1655</h3>
                            </div>
                            <div className='item-statistic bg-light-green'>
                                <i className="fa fa-carrot"></i>
                                <h5>Product about to expire</h5>
                                <h3>12</h3>
                            </div>
                            <div className='item-statistic bg-violet'>
                            <i className="fa fa-tomato"></i>
                                <h5>Products sold today</h5>
                                <h3>136</h3>
                            </div>
                            <div className='item-statistic bg-light-yellow'>
                            <i className="fa fa-pumpkin"></i>
                                <h5>Total new</h5>
                                <h3>1</h3>
                            </div>
                        </div>
                        <ProductTable/>
                    </div>

                </div>
                </>
        )
    }
}

export default ProductManageContent