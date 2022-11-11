import React, { Component } from 'react'
import { TransactionTable } from './TransactionTable.js'
class TransactionManageContent extends Component {
    render() {
        return (
            <>
                <div className='col-10 admin-home-content' style={{ height: "2000px" }}>
                    <div className='admin-user-heard'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin"><i className="fa-solid fa-house ms-2"></i> Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Transaction manage</li>
                            </ol>
                        </nav>
                    </div>
                    <div className='admin-user-content'>
                        <div className='statistic'>
                            <div className='item-statistic bg-light-blue'>
                                <i className="fa fa-file-invoice-dollar"></i>
                                <h5>Total transactions</h5>
                                <h3>1655</h3>
                            </div>
                            <div className='item-statistic bg-light-green'>
                                <i className="fa fa-file-invoice-dollar"></i>
                                <h5>Total transactions today</h5>
                                <h3>162</h3>
                            </div>
                            <div className='item-statistic bg-violet'>

                                <i className="fa fa-file-invoice-dollar"></i>
                                <h5>Total transactions cancel</h5>
                                <h3>136</h3>
                            </div>
                            <div className='item-statistic bg-light-yellow'>
                                <i className="fa fa-file-invoice-dollar"></i>
                                <h5>Total new</h5>
                                <h3>1</h3>
                            </div>
                        </div>
                        <TransactionTable />
                    </div>

                </div>
            </>
        )
    }
}

export default TransactionManageContent