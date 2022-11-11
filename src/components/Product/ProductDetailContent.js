import React, { useState } from 'react'
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom'
import { Footer } from '../Share/Footer';
import { MenuLeft } from '../Share/MenuLeft'
import { Navbar } from '../Share/Navbar';
import ProductTag from './ProductTag'


export const ProductDetailContent = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try{
                const response = await fetch(`http://localhost:5000/api/SanPhams/${productId.split('_').at(1)}`);
                setProduct(await response.clone().json());
                setLoading(false);
            }catch(e){
                console.log(e);
            }
        }
        getProducts();
    }, [])

    let style = {
        transform: "translate3d(-1028px, 0px, 0px)",
        transition: "all 0s ease 0s",
        width: "2056px"
    }
    let style2 = {
        width: "514px",
        marginRight: "0px"
    }
    let style3 = {
        transform: "translate3d(0px, 0px, 0px)",
        transition: "all 0s ease 0s",
        width: "685.332px"
    }
    let style4 = {
        width: "171.333px",
        height: "151px",
        marginRight: "0px"
    }
    let style5 = {
        width: "282.667px", marginRight: "0px"
    }
    let style6 = {
        transform: "translate3d(-1130.67px, 0px, 0px)",
        transition: "all 0.1s ease 0s",
        width: "3109.34px"
    }
    const Loading = () => {
        return (
            <>
                <div className='product-box'>
                    <Skeleton width={250} height={300}/>
                </div>

            </>
        )
    };
    const ShowImg = () => {
        return (
            <>
                {product?.product?.hinh.map((img) => {
                    return (
                        <>
                            <div className="owl-item " style={style2} key={img.MaHinh}>
                                <div className="item">
                                    <img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/${img.DuongDan}`} alt="" />
                                    <a href="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/prod-big-1.png" data-gal="prettyPhoto[prettyPhoto]" title="Product" className="caption-link"><i className="arrow_expand"></i></a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    
    const ShowImg2 =  () => {
        return (
            <>
                {product?.product?.hinh.map((img) => {
                    return (
                        <>
                            <div className="owl-item " key={img.MaHinh} style={style4}><div className="item"> <a href="#"><img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/${img.DuongDan}`} alt="" /> </a> </div></div>
                        </>
                    )
                })}
            </>
        )

    }
    const ShowProductInfo = () => {
        return (
            <>
                <div className="col-lg-6 pt-50">
                    <div className="product-content block-inline">

                        <div className="tag-rate">
                            <span className="prod-tag tag-1">new</span> <span className="prod-tag tag-2">sale</span>
                            <div className="rating">
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="fsz-12"> Based on 25 reviews</span>
                            </div>
                        </div>

                        <div className="single-caption">
                            <h3 className="section-title">
                                <a href="#">{product?.product?.TenSp}</a>
                            </h3>
                            <span className="divider-2"></span>
                            
                            <div className='row'>
                                {loading ? <Loading /> : <ShowDetailOptions />}
                            </div>
                            <div className="fsz-16">
                                <p>{product?.product?.MoTa}</p>
                            </div>

                            <div className="prod-btns">
                                <div className="quantity">
                                    <button className="btn minus"><i className="fa fa-minus-circle"></i></button>
                                    <input title="Qty" placeholder="03" className="form-control qty" type="text" />
                                    <button className="btn plus"><i className="fa fa-plus-circle"></i></button>
                                </div>


                            </div>
                            <ul className="meta">
                                <li> <strong> Origin </strong> <span>:  {product?.product?.XuatXu}</span> </li>
                                <li> <strong> Trademark </strong> <span>:  {product?.product?.ThuongHieu}</span> </li>
                                <li> <strong> Expiry </strong> <span>:  :{product?.product?.HanDung} month</span> </li>

                                <li> <strong> Category </strong> <span>:  {product?.product?.TenLoaiSp}</span> </li>
                                <li className="tags-widget"> <strong> Tags </strong> <span>:  <a href="#">fruits</a> <a href="#">vegetables</a> <a href="#">juices</a></span> </li>
                            </ul>
                            <div className="divider-full-1"></div>
                            <div className="add-cart pt-15">
                                <a href="#" className="theme-btn btn"> <strong> ADD TO CART </strong> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const  ShowDetailOptions = () => {
        return (
            <>
                {product?.product?.tt?.map((tt) => {
                    return (
                        <>
                            <p className="price col-4 ms-1 border border-2 border-light" key={tt.MaThongTinSanPham}>
                                <strong className="clr-txt fsz-20">${tt.DonGiaKm} </strong> <del className="light-font">${tt.DonGiaBan} </del>
                                Amount: {tt.SoLuong} <br />
                                {tt.TenThuocTinh}<input className="form-check-input ms-1 mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                {tt?.km.map((k)=>{
                                    return(
                                        <>
                                        <br/>
                                        <span className="badge rounded-pill bg-warning pe-4 ps-4 text-white" key={k.MaKm}>sale {k.PhanTramKm}%</span>
                                        </>
                                    )
                                })}
                                
                            </p>
                        </>
                    )
                })}
            </>
        )
    }
    
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <MenuLeft />
                    <div className='col-md-9 pt-15'>

                        <div className="product-single pb-50 clearfix row ms-2 me-2">
                            <div className="col-lg-6 col-sm-8 col-sm-offset-2 col-lg-offset-0 pt-50">

                                <div className="prod-slider sync1 owl-carousel owl-theme owl-loaded" data-bs-ride="carousel">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" style={style}>
                                            {loading ? <Loading /> : <ShowImg />}
                                        </div>
                                    </div>
                                    <div className="owl-controls">
                                        <div className="owl-nav">
                                            <div className="owl-prev" style={{ display: "none" }}>prev</div>
                                            <div className="owl-next" style={{ display: "none" }}>next</div>
                                        </div>
                                        <div className="owl-dots" style={{}}>
                                            <div className="owl-dot"><span></span></div>
                                            <div className="owl-dot"><span></span></div>
                                            <div className="owl-dot"><span></span></div>
                                            <div className="owl-dot"><span></span></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sync2 owl-carousel owl-theme owl-loaded">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" style={style3}>
                                            {loading ? <Loading /> : <ShowImg2 />}
                                        </div>
                                    </div>
                                    <div className="owl-controls"><div className="owl-nav">
                                        <div className="owl-prev" style={{}}><i className="fa fa-long-arrow-left"></i> PREV</div>
                                        <div className="owl-next" style={{}}>NEXT <i className="fa fa-long-arrow-right"></i></div></div>
                                        <div className="owl-dots" style={{}}><div className="owl-dot"><span></span></div>
                                            <div className="owl-dot"><span></span></div></div>
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                            {loading ? <Loading /> : <ShowProductInfo />}
                        </div>

                        <div className="prod-tabs pb-50">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Info</button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Comments</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <h3 className="fsz-16"><span className="light-font">item </span> <strong>description </strong>  </h3>
                                    <span className="divider-2 crl-bg"></span>

                                    <div className="block-inline pera">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore. </p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <h3 className="fsz-16"><span className="light-font">additional </span> <strong>info </strong> </h3>
                                    <span className="divider-2 crl-bg"></span>

                                    <div className="block-inline pera">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore. </p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <h3 className="fsz-16"><span className="light-font">customers </span> <strong>reviews </strong> <span className="clr-txt">(3)</span> </h3>
                                    <span className="divider-2 crl-bg"></span>

                                    <div className="review-wrap">
                                        <div className="review-img">
                                            <a href="#"> <img alt="" src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1663760338/users/user-3.jpg" className='img' /> </a>
                                        </div>
                                        <div className="review-caption">
                                            <h4 className="title fsz-16">
                                                <a href="#">Luis Nazario Garcia</a>
                                                <span className="fsz-10 gray-color">26 JUNE 2016</span>
                                            </h4>
                                            <div className="rating">
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="fsz-12 gray-color"> Rating : 5/5 </span>
                                            </div>

                                            <div className="block-inline pera">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-wrap">
                                        <div className="review-img">
                                            <a href="#"> <img alt="" src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1663760338/users/user-2.jpg" className='img' /> </a>
                                        </div>
                                        <div className="review-caption">
                                            <h4 className="title fsz-16">
                                                <a href="#">Luis Nazario Garcia</a>
                                                <span className="fsz-10 gray-color">26 JUNE 2016</span>
                                            </h4>
                                            <div className="rating">
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="fsz-12 gray-color"> Rating : 5/5 </span>
                                            </div>

                                            <div className="block-inline pera">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-wrap">
                                        <div className="review-img">
                                            <a href="#"> <img alt="" src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1663760338/users/user-3.jpg" className='img' /> </a>
                                        </div>
                                        <div className="review-caption">
                                            <h4 className="title fsz-16">
                                                <a href="#">Luis Nazario Garcia</a>
                                                <span className="fsz-10 gray-color">26 JUNE 2016</span>
                                            </h4>
                                            <div className="rating">
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="fsz-12 gray-color"> Rating : 5/5 </span>
                                            </div>

                                            <div className="block-inline pera">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="you-like organic-content pb-50">
                            <h3 className="fsz-20 pb-15 text-center"><span className="light-font">Related  </span> <strong>Products </strong>  </h3>
                            <div className="divider-full-1"></div>
                            <div className='row'>
                            </div>
                        </div>

                        <div className="your-review">
                            <h3 className="fsz-20 pb-15 text-center"><span className="light-font">Your item </span> <strong>review </strong>  </h3>
                            <div className="divider-full-1"></div>
                            <div className="your-review">
                                <div className="block-inline your-rating">
                                    <div className="left">
                                        <div className="rating">
                                            <span className="fsz-12 gray-color"> Your Rating :  </span>
                                            <span className="star"></span>
                                            <span className="star"></span>
                                            <span className="star"></span>
                                            <span className="star"></span>
                                            <span className="star"></span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="rating">
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="fsz-12 gray-color"> Overall Rating : 5/5  </span>
                                        </div>
                                    </div>
                                </div>

                                <form className="review-form row">
                                    <div className="form-group col-sm-12">
                                        <textarea className="form-control" placeholder="Message" cols="12" rows="4"></textarea>
                                    </div>
                                    <div className="form-group col-sm-12 text-center ptb-15">
                                        <button className="theme-btn" type="submit"> <strong> SUBMIT REVIEW </strong> </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}
