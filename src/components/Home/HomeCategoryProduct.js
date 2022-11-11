import React, { Component } from 'react'


export class HomeCategoryProduct extends Component {
    render() {

        return (
            <>
                <section className='naturix-goods sec-space light-bg'>
                    <div className='container'>
                        <div className="title-wrap">
                            <h4 className="sub-title"> FRESH FROM OUR FARM </h4>
                            <h2 className="section-title"> <span className="light-font">naturix </span> <strong> organic goods
                                <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/logo-icon.png" alt="" /></strong> </h2>
                        </div>
                        <div className="tabs-box text-center">
                        <ul className="theme-tabs small">
                            <li className="active"><a href="#naturix-tab-1" data-toggle="tab" aria-expanded="true"> <span className="light-font">all </span> <strong>goods </strong> </a></li>                                
                            <li className=""><a href="#naturix-tab-2" data-toggle="tab" aria-expanded="false"> <span className="light-font">organic </span> <strong>vegetables </strong> </a></li>                               
                            <li className=""><a href="#naturix-tab-3" data-toggle="tab" aria-expanded="false"> <span className="light-font">organic </span> <strong>fruits </strong> </a></li>
                            <li className=""><a href="#naturix-tab-4" data-toggle="tab" aria-expanded="false"> <span className="light-font">organic </span> <strong>tea </strong> </a></li>
                            <li className=""><a href="#naturix-tab-5" data-toggle="tab" aria-expanded="false"> <span className="light-font">all </span> <strong>bread </strong> </a></li>
                            <li className=""><a href="#naturix-tab-6" data-toggle="tab" aria-expanded="false"> <span className="light-font">organic </span> <strong>juices </strong> </a></li>
                        </ul>
                    </div>
                    </div>
                </section>
            </>
        )
    }
}