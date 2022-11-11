import React from 'react'

export const EditProductModal = () => {
    return (
        <>
            <div className="modal fade" id="EditProductModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className='row'>
                                <div className='col-5 bg-light-blue'>
                                    <h4>Edit</h4>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Product name</label>
                                        <input type="text" className="form-control" id="FormControlInputName" placeholder="Enter product name ..." />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Path in browser</label>
                                        <input type="text" className="form-control" id="FormControlInputPath" placeholder="Ex:/product-name-abc..." />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Key work</label>
                                        <input type="text" className="form-control" id="FormControlInputKey" placeholder="Ex:apple, apple sale, my apple" />
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Origin</label>
                                                <input type="text" className="form-control" id="FormControlInputKey" placeholder="Ex:vietnam, USA" />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Trademark</label>
                                                <input type="text" className="form-control" id="FormControlInputKey" placeholder="Ex:gucci" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Expiry</label>
                                                <input type="text" className="form-control" id="FormControlInputKey" placeholder="Ex: 6 month" />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                                                <select class="form-select form-select-md" aria-label=".form-select-md example">
                                                    <option selected>vegetable</option>
                                                    <option defaultValue="1">food</option>
                                                    <option defaultValue="2">fruit</option>
                                                    <option defaultValue="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Product describe</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                                    </div>
                                </div>
                                <div className='col-4 bg-light-green'>
                                    <h4>Add new options describe</h4>
                                    <div className='new-options-product'>
                                        <div className='options-detail'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Option name</label>
                                                <input type="text" className="form-control" id="FormControlInputName" placeholder="Enter option name ..." />
                                            </div>
                                            <div className='row'>
                                                <div className='col-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Quality</label>
                                                        <input type="number" className="form-control" id="FormControlInputName" placeholder="Enter" />
                                                    </div>
                                                </div>
                                                <div className='col-8'>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Unit</label>
                                                        <input type="text" className="form-control" id="FormControlInputName" placeholder="Ex: gram, kg ..." />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='row'>
                                                <div className='col-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Cost</label>
                                                        <input type="text" className="form-control" id="FormControlInputName" placeholder="Enter cost ..." />
                                                    </div>
                                                </div>
                                                <div className='col-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                                                        <input type="text" className="form-control" id="FormControlInputName" placeholder="Enter price ..." />
                                                    </div>
                                                </div>
                                                <div className='col-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Import Price</label>
                                                        <input type="text" className="form-control" id="FormControlInputName" placeholder="Enter price ..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='add-new-options'>
                                            <div className='add-product-img'>
                                                <i className='fa fa-plus'></i>
                                            </div>
                                            <div className='list-options'>
                                                <div className='item-options'>
                                                    <h4>1</h4>
                                                </div>
                                                <div className='item-options'>
                                                    <h4>2</h4>
                                                </div>
                                                <div className='item-options'>
                                                    <h4>3</h4>
                                                </div>

                                            </div>
                                        </div>
                                        <button type="button" className="theme-btn bg-violet">Save changes</button>

                                    </div>
                                </div>
                                <div className='col-3 bg-light-yellow'>
                                    <h4>Add new product image</h4>
                                    <div className='add-new-options'>
                                        <div className='add-product-img'>
                                            <i className='fa fa-plus'></i>
                                            
                                        </div>
                                        <div className='list-options'>
                                            <div className='item-options'>
                                                <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099430/products/tao-1.webp" />
                                            </div>
                                            <div className='item-options'>
                                                <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099430/products/tao-2.webp" />
                                            </div>
                                            <div className='item-options'>
                                                <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099430/products/tao-3.webp" />
                                            </div>
                                            <div className='item-options'>
                                                <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099430/products/tao-1.webp" />
                                            </div>
                                            <div className='item-options'>
                                                <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099430/products/tao-2.webp" />
                                            </div>
                                            <div className='item-options'>
                                                <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099430/products/tao-3.webp" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="theme-btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
