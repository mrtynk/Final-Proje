import React from 'react';
import { Link } from 'react-router-dom';

export default class BenefitsOne extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="blog-one-sec blog-one-sec--two blog-one-sec--two--blog grid">
                    <div className="container">
                        <div className="row">
                            {/* Blog Tekil Gönderi Başlangıç */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl + "assets/images/blog/blog-grid-img1.jpg"} alt="#" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="blog-grid__content-bg"></div>
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Jhon Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Yorum</Link></li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Çevik İnşaat ile İş Akışını Geliştirin</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Tekil Gönderi Bitiş */}

                            {/* Blog Tekil Gönderi Başlangıç */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl + "assets/images/blog/blog-grid-img2.jpg"} alt="#" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="blog-grid__content-bg"></div>
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Jhon Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Yorum</Link></li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>LEED Sertifikasının Faydaları Nelerdir?</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Tekil Gönderi Bitiş */}

                            {/* Diğer blog gönderilerini aynı şekilde Türkçeleştirebilirim */}

                            {/* Sayfalama Başlangıç */}
                            <div className="blog-grid__pagination text-center">
                                <ul className="styled-pagination clearfix">
                                    <li className="prev"><Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-angle-double-left"></span></Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/`} className="active">1</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/`}>2</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/`}>3</Link></li>
                                    <li className="next"><Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-angle-double-right"></span></Link></li>
                                </ul>
                            </div>
                            {/* Sayfalama Bitiş */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
