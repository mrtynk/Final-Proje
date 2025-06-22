import React from 'react';
import {Link} from 'react-router-dom';

export default class HeroTwo extends React.Component {
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

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            <>
                <section className="slider-one-sec slider-one-sec--two">
                    <div className="slider-carousel owl-carousel owl-theme">
                        {/* Slider 1 */}
                        <div className="slider-one__single">
                            <div className="slider-one-sec--two__img">
                                <img src={publicUrl + "assets/images/slider/slider-v2-img1.png"} alt="" />
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>En İyi İnşaatlarımız.</h3>
                                            <h2>Güçlü <br /> <span>Yapılar İnşa Ediyoruz</span></h2>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia deserunt mollit anim id est laborum.</p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn" data-text="Daha Fazla +">Daha Fazla +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slider 2 */}
                        <div className="slider-one__single">
                            <div className="slider-one-sec--two__img">
                                <img src={publicUrl + "assets/images/slider/slider-v2-img1.png"} alt="" />
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>En İyi İnşaatlarımız.</h3>
                                            <h2>Güçlü <br /> <span>Yapılar İnşa Ediyoruz</span></h2>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia deserunt mollit anim id est laborum.</p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn" data-text="Daha Fazla +">Daha Fazla +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slider 3 */}
                        <div className="slider-one__single">
                            <div className="slider-one-sec--two__img">
                                <img src={publicUrl + "assets/images/slider/slider-v2-img1.png"} alt="" />
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>En İyi İnşaatlarımız.</h3>
                                            <h2>Güçlü <br /> <span>Yapılar İnşa Ediyoruz</span></h2>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia deserunt mollit anim id est laborum.</p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn" data-text="Daha Fazla +">Daha Fazla +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
    }
}
