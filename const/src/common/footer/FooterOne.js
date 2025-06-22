import React from 'react';
import {Link} from 'react-router-dom';

export default class FooterOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <footer className="footer-one-sec">
                    <div className="footer-one__pattern" style={{backgroundImage: 'url('+publicUrl+'assets/images/pattern/footer-v1-pattern.png)'}}></div>
                    <div className="footer-one__top">
                        <div className="footer-one__top-img"
                            style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/footer-v1-img3.png)'}}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-one__top-inner">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                                <div className="footer-widget__column footer-widget__about">
                                                    <div className="footer-widget__about-logo">
                                                        <Link to="/"><img src={publicUrl+"assets/images/resources/logo-1.png"} alt="Logo" /></Link>
                                                    </div>

                                                    <p className="footer-widget__about-text">
                                                        Duis aute irure dolor in reprehenderit
                                                        on voluptate velit esse cillum dolore eu nulla pariatur. Excepteur sint
                                                        occaecat
                                                    </p>

                                                    <div className="footer-widget__about-social-link">
                                                        <ul>
                                                            <li>
                                                                <a href="https://facebook.com">
                                                                    <span className="first icon-facebook-app-symbol"></span>
                                                                    <span className="second icon-facebook-app-symbol"></span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://twitter.com">
                                                                    <span className="first icon-twitter"></span>
                                                                    <span className="second icon-twitter"></span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://pinterest.com">
                                                                    <span className="first icon-pinterest"></span>
                                                                    <span className="second icon-pinterest"></span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://linkedin.com">
                                                                    <span className="first icon-linkedin"></span>
                                                                    <span className="second icon-linkedin"></span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                                <div className="footer-widget__column footer-widget__services">
                                                    <h2 className="footer-widget__title">Hizmetlerimiz</h2>
                                                    <ul className="footer-widget__services-list">
                                                        <li className="footer-widget__services-list-item"><Link to="/about-one">Şirket Hakkında</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to="/services">Şirket Hizmetleri</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to="/blog">Şirket Haberleri</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to="/portfolio">Şirket Projeleri</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to="/">Vaka Çalışmalarımız</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                                                <div className="footer-widget__column footer-widget__explore">
                                                    <h2 className="footer-widget__title">Keşfet</h2>
                                                    <ul className="footer-widget__explore-list">
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Proje Planlama</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Maliyet Hesaplayıcı</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Referanslarımız</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Madencilik Sektörü</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Kapanış ve Reform</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.7s">
                                                <div className="footer-widget__column footer-widget__posts">
                                                    <h2 className="footer-widget__title">Öne Çıkan Yazılar</h2>
                                                    <div className="footer-widget__posts-list">
                                                        <ul>
                                                            <li>
                                                                <div className="img-box">
                                                                    <img src={publicUrl+"assets/images/resources/footer-v1-img1.jpg"} alt="" />
                                                                    <div className="overlay-icon">
                                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}><span className="icon-link"></span></Link>
                                                                    </div>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p><Link to={process.env.PUBLIC_URL + `/blog-details`}>Birçok Kişinin <br /> İhtiyacı Göz Ardı Etmesi</Link></p>
                                                                    <span>12 Haziran 2022</span>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="img-box">
                                                                    <img src={publicUrl+"assets/images/resources/footer-v1-img2.jpg"} alt="" />
                                                                    <div className="overlay-icon">
                                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}><span className="icon-link"></span></Link>
                                                                    </div>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p><Link to={process.env.PUBLIC_URL + `/blog-details`}>İş Dünyası Ağındaki <br /> Ulusal Konferans</Link></p>
                                                                    <span>12 Haziran 2022</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-one__bottom clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-one__bottom-inner">
                                        <div className="footer-one__bottom-text">
                                            <p>© 2022 Tüm hakları saklıdır. <Link to="/">Const</Link></p>
                                        </div>

                                        <div className="footer-one__bottom-list">
                                            <ul>
                                                <li><Link to="/about-one">Kullanım Şartları</Link></li>
                                                <li><Link to="/about-one">Hizmetler</Link></li>
                                                <li><Link to="/about-one">Kariyer</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
