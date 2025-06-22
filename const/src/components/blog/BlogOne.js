import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-one-sec blog-one-sec--two style3">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Blogumuz</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">En Güncel Haberlerimiz</h2>
                        </div>
                        <div className="row">
                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/blog/blog-v2-img1.jpg"} alt="" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="date-box text-center">
                                                <span>12</span>
                                                <h4>Mayıs</h4>
                                            </div>
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to="/">Dani Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to="/">2 Yorum</Link>
                                                    </li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Leed Sertifikasının Faydaları Nelerdir? <br /></Link></h2>
                                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/blog-details`}>Devamını Oku <span className="icon-right-arrow-1"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/blog/blog-v2-img2.jpg"} alt="" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="date-box text-center">
                                                <span>12</span>
                                                <h4>Mayıs</h4>
                                            </div>
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to="/">Dani Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to="/">2 Yorum</Link>
                                                    </li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Profesyonel Yaklaşım, Her Zaman <br /> Kaliteli İş</Link></h2>
                                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/blog-details`}>Devamını Oku <span className="icon-right-arrow-1"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/blog/blog-v2-img3.jpg"} alt="" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="date-box text-center">
                                                <span>12</span>
                                                <h4>Mayıs</h4>
                                            </div>
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to="/">Dani Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to="/">2 Yorum</Link>
                                                    </li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Müşteri Memnuniyeti <br /> Önceliğimizdir</Link></h2>
                                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/blog-details`}>Devamını Oku <span className="icon-right-arrow-1"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
