import React from 'react';
import { Link } from 'react-router-dom';

export default class FeatureOne extends React.Component {
    render(){
        return (
            <>
                <section className="feature-one-sec">
                    <div className="container">
                        <div className="row">
                            {/* Start Feature One Single */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="feature-one__single">
                                    <div className="shape1"></div>
                                    <div className="feature-one__single-inner">
                                        <div className="feature-one__single-icon">
                                            <span className="icon-crane"></span>
                                        </div>

                                        <div className="feature-one__single-text">
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Otomasyon Endüstrisi</Link></h2>
                                            <p>Hata ile doğan her şeyi ve suçlama yapan acıyı<br /> anlayan kimse yoktur.</p>
                                            <div className="feature-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/`}>Devamını Oku<i className="icon-right-arrow-1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature One Single */}

                            {/* Start Feature One Single */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="feature-one__single">
                                    <div className="shape1"></div>
                                    <div className="feature-one__single-inner">
                                        <div className="feature-one__single-icon">
                                            <span className="icon-industrial-zone"></span>
                                        </div>

                                        <div className="feature-one__single-text">
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Sanayi İnşaatı</Link></h2>
                                            <p>Hata ile doğan her şeyi ve suçlama yapan acıyı<br /> anlayan kimse yoktur.</p>
                                            <div className="feature-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/`}>Devamını Oku<i className="icon-right-arrow-1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
