import React, { Component } from 'react'
import { HomeCategoryProduct } from './HomeCategoryProduct'
import ProductPreViewModal from '../../components/Product/ProductPreViewModal'
import { SlideBanner } from './SlideBaner'
import ProductTag from '../Product/ProductTag'

const HomeContent =()=> {

    return (
      <div>
        <SlideBanner />
        {/* content about */}
        <section className="organic-farm-2 sec-space-bottom">

          <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/sec-img-7.png" className="left-bottom-img" />
          <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/sec-img-8.png" className="right-top-img" />

          <div className="pattern">
            <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/white-pattern.png" />
          </div>
          <div className="section-icon">
            <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/icon-1.png" />
            <div className="ptb-15 icon">
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
              <span className="light-font"> a taste of </span> <strong>real food</strong>
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
            </div>
          </div>

          <div className="container rel-div">
            <div className="row">
              <div className="col-sm-6 text-right fsz-16 pt-15 xs-text">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  enim ad minim veniam, quis nostrud exerci tation.</p>
              </div>
              <div className="col-sm-6 text-left xs-text">
                <h2 className="section-title"> <span className="light-font">we are </span> <strong>organic farmfood <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/logo-icon.png" alt="" /> </strong> </h2>
                <h4 className="sub-title"> ABOUT NATURIX FARMFOOD </h4>
              </div>
            </div>
            <h4>New</h4>
            <div className='tab-content organic-content row'>
            {/* product */}
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 text-center">
                <div className="feature-wrap">
                  <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature-1.png" alt="" />
                  <h3 className="title-1 ptb-15"> <span className="light-font">fresh from </span> <strong> naturix farm</strong> </h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  </p>
                  <a href="#" className="sm-bnt-wht">Read More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center">
                <div className="feature-wrap">
                  <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature-2.png" alt="" />
                  <h3 className="title-1 ptb-15"> <span className="light-font"> 100%</span> <strong> organic goods</strong> </h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  </p>
                  <a href="#" className="sm-bnt-wht">Read More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center">
                <div className="feature-wrap">
                  <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature-3.png" alt="" />
                  <h3 className="title-1 ptb-15"> <span className="light-font">premium </span> <strong> quality</strong> </h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  </p>
                  <a href="#" className="sm-bnt-wht">Read More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center">
                <div className="feature-wrap">
                  <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature-4.png" alt="" />
                  <h3 className="title-1 ptb-15"> <span className="light-font">100% </span> <strong>natural</strong> </h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  </p>
                  <a href="#" className="sm-bnt-wht">Read More</a>
                </div>
              </div>
            </div>

            <div className="rel-div feature-img">
              <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature.png" alt="" />
            </div>
          </div>
        </section>
        <HomeCategoryProduct />
      </div>
    )
}
export default HomeContent;