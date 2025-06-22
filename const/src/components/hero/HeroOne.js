import React from 'react';
import {Link} from 'react-router-dom';

export default class HeroOne extends React.Component {
    componentDidMount() {
        const $ = window.$;
        
        if ($('.slider-carousel').length) {
            $('.slider-carousel').owlCarousel({
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              loop: true,
              margin: 0,
              nav: false,
              singleItem: true,
              smartSpeed: 500,
              autoplay: true,
              autoplayTimeout: 6000,
              navText: ['<span class="icon-right-arrow"></span>', '<span class="icon-right-arrow"></span>'],
              responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1024: { items: 1 }
              }
            });
        }
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            <>
                <section className="slider-one-sec style3">
                    <div className="slider-carousel owl-carousel owl-theme">
                        {/* Slider 1 */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/update1.0/slider-v1-img4.jpg)'}}></div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>İnşaat Sektörü.</h3>
                                            <h2>Yeni ve tutarlı <br /> projeler inşa ediyoruz.</h2>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia
                                                deserunt mollit anim id est laborum. </p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Daha Fazla +">Daha Fazla +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slider 2 */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/update1.0/slider-v1-img5.jpg)'}}></div>
                            <div className="container pl-0">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content text-center">
                                            <h3>En İyi İnşaatlarımız.</h3>
                                            <h2>Modern İnşaat & <br /> Endüstri</h2>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia
                                                deserunt mollit anim id est laborum. </p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Daha Fazla +">Daha Fazla +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slider 3 */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/update1.0/slider-v1-img6.jpg)'}}></div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>En İyi İnşaatlarımız.</h3>
                                            <h2>İnşaat için <br /> en iyi çözüm</h2>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia
                                                deserunt mollit anim id est laborum. </p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Daha Fazla +">Daha Fazla +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
