import React from 'react';
import { Link } from 'react-router-dom';

export default class AboutThree extends React.Component {
    componentDidMount() {
        const $ = window.$;

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false,
            });
        }
    }
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            <>
                <section className="about-three">
                    <div className="container">
                        <div className="row">
                            {/* Start About Three Img */}
                            <div className="col-xl-6">
                                <div className="about-three__img">
                                    <div className="inner">
                                        <img src={publicUrl + "assets/images/update1.0/about-v3-img1.jpg"} alt="#" />
                                        <div className="about-three__img-video wow zoomIn" data-wow-delay="100ms" data-wow-duration="3500ms">
                                            <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                <div className="about-three__img-video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End About Three Img */}

                            {/* Start About Three Content */}
                            <div className="col-xl-6">
                                <div className="about-three__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>HAKKIMIZDA</h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Ticari İnşaat</h2>
                                    </div>

                                    <div className="about-three__content-inner">
                                        <div className="text1">
                                            <p>İnşaat, nesneler, sistemler ve organizasyonlar oluşturmanın sanatı ve bilimi anlamına gelen genel bir terimdir. Latince construction ve Eski Fransızca construction kelimelerinden gelir. İnşa etmek fiildir.</p>
                                        </div>
                                        <div className="text2">
                                            <h4>Uzun zamandır kabul edilen bir gerçek vardır ki, okuyucu okunabilir içerik tarafından dikkatinin dağılacağını bilir.</h4>
                                        </div>
                                        <ul className="about-three__content-list">
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> İç Tasarım Paketi</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> Ticari Ofis Yenileme</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> Konut Çatısı Onarımı</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="about-three__content-btn">
                                            <Link to={process.env.PUBLIC_URL + `/about-one`} className="thm-btn" data-text="Daha Fazla Keşfet +">Daha Fazla Keşfet +</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End About Three Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
