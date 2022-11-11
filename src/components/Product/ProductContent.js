import React, { useState } from 'react'
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { MenuLeft } from '../Share/MenuLeft';
import ProductPreViewModal from './ProductPreViewModal';
import ProductTag from './ProductTag'
import { ProductTagFill } from './ProductTagFill'

const ProductContent = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:5000/api/SanPhams/");
                if (componentMounted) {
                    setData(await response.clone().json());
                    setFilter(await response.json());
                    setLoading(false);
                }
                return () => {
                    componentMounted = false;
                }
            } catch (e) {
                console.log(e);
            }
        };
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="loader">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>

            </>
        )
    };
    const filterProduct = (cat) => {
        const updateList = data.product.filter(function (el) { return el.TenLoaiSp == cat });
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
                <ul id="tabs" className="blog-tabs">
                    <li className="active"><Link to="#" onClick={() => setFilter(data)}><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>All</font></font></Link></li>
                    <li className=""><Link to="#" onClick={() => filterProduct("Organic")} ><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> Organic</font></font></Link></li>
                    <li className=""><Link to="#" onClick={() => filterProduct("Fruit")} ><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Fruit</font></font></Link></li>
                    <li className=""><Link to="#" onClick={() => filterProduct("Vegetable")} ><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Vegetables</font></font></Link></li>
                    <li className=""><Link to="#" onClick={() => filterProduct("Juices")} ><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Juices</font></font></Link></li>
                    <li className=""><Link to="#" onClick={() => filterProduct("Natural")} ><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> Natural</font></font></Link></li>
                    <li className=""><Link to="#" onClick={() => filterProduct("Other")} ><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Other</font></font></Link></li>
                </ul>
                {filter.product?.map((product) => {
                    return (
                        <>
                            <ProductTag product={product} />
                        </>
                    )
                })}
            </>
        )
    };

    return (
        <>
            <section className="breadcrumb-bg">
                <div className="theme-container container ">
                    <div className="site-breadcumb white-clr">
                        <h2 className="section-title"> <strong className="clr-txt">naturix </strong> <span className="light-font">Shop </span> </h2>
                        <ol className="breadcrumb breadcrumb-menubar">
                            <li> <a href="/"> Home </a> SHOP  </li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className='shop-wrap sec-space-bottom'>
                <div className="pattern">
                    <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/white-pattern.png" />
                </div>
                <div className='container rel-div'>
                    <div className="row sort-bar">
                        <div className="icon"> <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/logo/logo-2.png" /> </div>
                        <div className="col-lg-6">
                            <div className="sort-dropdown left">
                                <span>CATEGORY</span>
                                <div className="search-wrap">
                                    <input className="form-control" placeholder="" />
                                    <button className="btn" type="submit"> <i className="fa fa-search"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 right'>
                            <div className='sort-dropdown'>
                                <span>BY PRICE</span>
                                <div className='search-selectpicker selectpicker-wrapper'>
                                    <div className='btn-group bootstrap-select input-price' style={{ width: "100%" }}>
                                        <button type="button"
                                            className="btn dropdown-toggle btn-default"
                                            data-bs-toggle="dropdown"
                                            role="button"
                                            title="Low to hight"
                                            aria-expanded="false"
                                        >
                                            <span className="filter-option pull-left"> Low to High </span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Low to hight</a></li>
                                            <li><a className="dropdown-item" href="#">Hight to low</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='sort-dropdown'>
                                <span>SORT BY</span>
                                <div className='search-selectpicker selectpicker-wrapper'>
                                    <div className='btn-group bootstrap-select input-price' style={{ width: "100%" }}>
                                        <button type="button" className="btn dropdown-toggle btn-default" data-bs-toggle="dropdown" aria-expanded="false">
                                            Popular item
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Low to hight</a></li>
                                            <li><a className="dropdown-item" href="#">Hight to low</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider-full-1"></div>
                    <div className='row'>
                        {/* menu left */}
                        <MenuLeft />
                        <div className='col-md-9'>
                            <div className="result-bar block-inline">
                                <h4 className="result-txt">search result <b> 125 </b> </h4>
                                {/* <ul className="view-tabs">
                                        <li className={`${this.state.isShowGrid ? "active" : ""}`} onClick={() => this.handleShowList()}>
                                            <a href="#!" data-toggle="tab" aria-expanded="true">
                                                <i className="fa fa-th"></i>
                                            </a>
                                        </li>
                                        <li className={`${this.state.isShowList ? "active" : ""}`} onClick={() => this.handleShowGrid()}>
                                            <a href="#!" data-toggle="tab" aria-expanded="false">
                                                <i className="fa fa-th-list"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                            </div>
                            <div className='tab-content shop-content'>
                                <div className="tab-pane active in" role="tabpanel">
                                    <div className='row'>
                                        {loading ? <Loading /> : <ShowProducts />}
                                    </div>
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
                                {/* <div className={`tab-pane ${this.state.isShowGrid ? "active in" : ""}`} role="tabpanel">
                                        <div className='row'>
                                            <ProductTagFill />
                                            <ProductTagFill />
                                            <ProductTagFill />
                                            <ProductTagFill />
                                            <ProductTagFill />
                                        </div>
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
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductContent;