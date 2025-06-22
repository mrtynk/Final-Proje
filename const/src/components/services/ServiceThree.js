import React from 'react';
import {Link} from 'react-router-dom';

export default class ServiceThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        return (
            <>
                <section className="services-three">
                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/services-v3-shape1.png"} alt="#" /></div>
                    <div className="shape2 rotate-me"><img src={publicUrl+"assets/images/update1.0/services-v3-shape2.png"} alt="#" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="services-three__top">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>ŞİRKET HİZMETLERİ</h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Şirketimizin En İyi <br /> Hizmetleri</h2>
                                    </div>
                                    <div className="text-box">
                                        <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, fakat <br /> çoğunluğu çeşitli şekillerde değiştirilmiştir.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single active">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-crane"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Kömür Kazıma</Link></h3>
                                    <p>Lorem ipsum basitçe ücretsiz metindir dolor amett consec adipisc.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-interior-design-1"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Ev Planlama</Link></h3>
                                    <p>Lorem ipsum basitçe ücretsiz metindir dolor amett consec adipisc.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-surgery"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Maden Fabrikası</Link></h3>
                                    <p>Lorem ipsum basitçe ücretsiz metindir dolor amett consec adipisc.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-painting"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Boyama Hizmeti</Link></h3>
                                    <p>Lorem ipsum basitçe ücretsiz metindir dolor amett consec adipisc.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
