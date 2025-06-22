import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogFour extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="blog-one-sec blog-one-sec--two blog-one-sec--two--blog">
                    <div className="container">
                        <div className="row">
                            {/* Blog Tekil Gönderi Başlangıç */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl + "assets/images/blog/blog-v2-img1.jpg"} alt="" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Jhon Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Yorum</Link></li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Kömür Madeni Üretimi ve <br /> Taşımacılığı</Link></h2>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/blog-details`} className="thm-btn" data-text="Devamını Oku +">Devamını Oku +</Link>
                                                </div>
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
                                            <img src={publicUrl + "assets/images/blog/blog-v2-img2.jpg"} alt="" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Jhon Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Yorum</Link></li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Çevik İnşaat ile İş Akışını Geliştirin</Link></h2>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/blog-details`} className="thm-btn" data-text="Devamını Oku +">Devamını Oku +</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Tekil Gönderi Bitiş */}

                            {/* Blog Tekil Gönderi Başlangıç */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl + "assets/images/blog/blog-v2-img3.jpg"} alt="" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Jhon Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Yorum</Link></li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Son Ticari Gayrimenkul <br /> İşlemleri</Link></h2>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/blog-details`} className="thm-btn" data-text="Devamını Oku +">Devamını Oku +</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Tekil Gönderi Bitiş */}

                            {/* Diğer blog gönderilerini benzer şekilde çevirebilirim */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}
