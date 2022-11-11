import React from 'react'
import { AddUserModal } from './AddUserModal';
import { EditUserModal } from './EditUserModal';

export const UserTable = () => {

    return (
        <>
            <AddUserModal/>
            <EditUserModal/>
            <div className='user-table table-responsive'>
                <div className='user-table-header'>
                    <h4>User list</h4>
                    <div className='row'>
                        <div className='col-6'>
                            <input type="text" placeholder='Find user...' />
                            <lord-icon
                                src="https://cdn.lordicon.com/zniqnylq.json"
                                trigger="hover"
                                style={{ width: "38px", height: "30px" }}>
                            </lord-icon>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <button type="button" className="slide-btn" data-bs-toggle="modal" data-bs-target="#AddUserModal"><i className="fa fa-user-plus me-1"></i>Create</button> 
                        </div>
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th>img</th>
                            <th>Email</th>
                            <th>Number phone</th>
                            <th>Full name</th>
                            <th>Roll</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1664099047/users/user-1.png" className='table-img img-tooltip' /></td>
                            <td><p>kyanh123@gmail</p></td>
                            <td>0365550006</td>
                            <td> ky anh</td>
                            <td><span className="badge bg-danger">Admin</span></td>
                            <td className='options'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/bxxnzvfm.json"
                                    trigger="hover"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                                <lord-icon
                                    src="https://cdn.lordicon.com/kfzfxczd.json"
                                    trigger="hover"
                                    colors="primary:#e83a30"
                                    scale="40"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1664099047/users/user-3.png" className='table-img img-tooltip' /></td>
                            <td>tranvana123@gmail.com</td>
                            <td>0365550078</td>
                            <td> Trần Văn A</td>
                            <td><span className="badge rounded-pill bg-primary">sales agent</span></td>
                            <td className='options'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/bxxnzvfm.json"
                                    trigger="hover"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                                <lord-icon
                                    src="https://cdn.lordicon.com/kfzfxczd.json"
                                    trigger="hover"
                                    colors="primary:#e83a30"
                                    scale="40"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1664099047/users/user-2.png" className='table-img img-tooltip' /></td>
                            <td>tranvanb123@gmail.com</td>
                            <td>0365550078</td>
                            <td> Trần Văn B</td>
                            <td><span className="badge rounded-pill bg-warning">customer consultation</span></td>
                            <td className='options'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/bxxnzvfm.json"
                                    trigger="hover"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                                <lord-icon
                                    src="https://cdn.lordicon.com/kfzfxczd.json"
                                    trigger="hover"
                                    colors="primary:#e83a30"
                                    scale="40"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="rel-div pt-50">
                    <div className="divider-full-1"></div>
                    <div className="nav-page">
                        <a href="#" className="fa fa-long-arrow-left left"></a>
                        <a href="#" className="fa fa-long-arrow-right right"></a>
                    </div>
                </div>
                <div className="pagination-wrap">
                    <ul className="pagintn">
                        <li><a href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li><a href="#">04</a></li>
                        <li><a href="#">05</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#">15</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}
