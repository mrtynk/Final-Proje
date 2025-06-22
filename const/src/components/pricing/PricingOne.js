import React from 'react';
import {Link} from 'react-router-dom';

export default class PricingOne extends React.Component {
    render(){
        return (
            <>
                <section className="pricing-plan-one">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>FİYATLANDIRMA & PLANLAR</h6>
                                <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Fiyat Planı</h2>
                        </div>
                        <div className="row">
                            {/* Başlangıç Planı */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="pricing-plan-one__single">
                                    <div className="pricing-plan-one__single-inner">
                                        <div className="table-header text-center">
                                            <div className="category-wrapper">
                                                <h3>Başlangıç Planı</h3>
                                            </div>
                                            <h2>$79.99</h2>
                                            <p>Aylık</p>
                                        </div>

                                        <div className="table-content">
                                            <ul>
                                                <li>%100 Sigorta</li>
                                                <li>Özel İş Kuralları</li>
                                                <li>Profesyonel Tasarım</li>
                                                <li>Tasarım ve İnşa</li>
                                                <li>10 Yıl Bakım</li>
                                            </ul>
                                        </div>

                                        <div className="table-footer">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Şimdi Satın Al +">Şimdi Satın Al +</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Standart Plan */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="pricing-plan-one__single">
                                    <div className="pricing-plan-one__single-inner">
                                        <div className="table-header text-center">
                                            <div className="category-wrapper">
                                                <h3>Standart Plan</h3>
                                            </div>
                                            <h2>$89.99</h2>
                                            <p>Aylık</p>
                                        </div>

                                        <div className="table-content">
                                            <ul>
                                                <li>%100 Sigorta</li>
                                                <li>Özel İş Kuralları</li>
                                                <li>Profesyonel Tasarım</li>
                                                <li>Tasarım ve İnşa</li>
                                                <li>10 Yıl Bakım</li>
                                            </ul>
                                        </div>

                                        <div className="table-footer">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Şimdi Satın Al +">Şimdi Satın Al +</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Plan */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="pricing-plan-one__single">
                                    <div className="pricing-plan-one__single-inner">
                                        <div className="table-header text-center">
                                            <div className="category-wrapper">
                                                <h3>Premium Plan</h3>
                                            </div>
                                            <h2>$99.99</h2>
                                            <p>Aylık</p>
                                        </div>

                                        <div className="table-content">
                                            <ul>
                                                <li>%100 Sigorta</li>
                                                <li>Özel İş Kuralları</li>
                                                <li>Profesyonel Tasarım</li>
                                                <li>Tasarım ve İnşa</li>
                                                <li>10 Yıl Bakım</li>
                                            </ul>
                                        </div>

                                        <div className="table-footer">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Şimdi Satın Al +">Şimdi Satın Al +</Link>
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
