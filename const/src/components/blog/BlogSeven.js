import React from 'react';
import {Link} from 'react-router-dom';
import BlogCategory from './BlogCategory';
import BlogLatestPost from './BlogLatestPost';
import BlogQuery from './BlogQuery';
import BlogSearch from './BlogSearch';
import BlogTags from './BlogTags';

export default class BlogSeven extends React.Component {
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
    render(){
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="blog-standard">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-standard__left">
                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl + "assets/images/blog/blog-standard-img1.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Eki</p>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={publicUrl}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                            </ul>
                                            <h2><Link to={publicUrl + `blog-details`}>Çevik İnşaat ile İş Akışını İyileştirin</Link></h2>
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                               espri katılmış veya inanılmaz görünen rastgele kelimeler içerir. Lorem Ipsum pasajı
                                               kullanacaksanız...</p>
                                            <div className="btn-box">
                                                <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl + "assets/images/blog/blog-standard-img2.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Eki</p>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={publicUrl}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                            </ul>
                                            <h2><Link to={publicUrl + `blog-details`}>LEED Sertifikasının Faydaları Nelerdir?</Link></h2>
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                               espri katılmış veya inanılmaz görünen rastgele kelimeler içerir. Lorem Ipsum pasajı
                                               kullanacaksanız...</p>
                                            <div className="btn-box">
                                                <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl + "assets/images/blog/blog-standard-img3.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Eki</p>
                                            </div>
                                            <div className="blog-standard__video-link">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="blog-standard__video-icon">
                                                        <span className="fa fa-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={publicUrl}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                            </ul>
                                            <h2><Link to={publicUrl + `blog-details`}>İpuçları: İnşaatçıların Sorumluluk Sigortası Gerekir Mi?</Link></h2>
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                               espri katılmış veya inanılmaz görünen rastgele kelimeler içerir. Lorem Ipsum pasajı
                                               kullanacaksanız...</p>
                                            <div className="btn-box">
                                                <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl + "assets/images/blog/blog-standard-img4.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Eki</p>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={publicUrl}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                            </ul>
                                            <h2><Link to={publicUrl + `blog-details`}>İnşaat İçin En İyi 9 Kılavuz</Link></h2>
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                               espri katılmış veya inanılmaz görünen rastgele kelimeler içerir. Lorem Ipsum pasajı
                                               kullanacaksanız...</p>
                                            <div className="btn-box">
                                                <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl + "assets/images/blog/blog-standard-img5.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Eki</p>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={publicUrl}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                            </ul>
                                            <h2><Link to={publicUrl + `blog-details`}>Çöpte Neler Konulmaz?</Link></h2>
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                               espri katılmış veya inanılmaz görünen rastgele kelimeler içerir. Lorem Ipsum pasajı
                                               kullanacaksanız...</p>
                                            <div className="btn-box">
                                                <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Styled Pagination */}
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <ul className="styled-pagination clearfix">
                                                <li className="prev"><Link to={publicUrl}><span className="fa fa-angle-double-left"></span></Link></li>
                                                <li><Link to={publicUrl} className="active">1</Link></li>
                                                <li><Link to={publicUrl}>2</Link></li>
                                                <li><Link to={publicUrl}>3</Link></li>
                                                <li className="next"><Link to={publicUrl}><span className="fa fa-angle-double-right"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Styled Pagination */}
                                </div>
                            </div>

                            {/* Start Sidebar */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar sidebar__blog-standard">
                                    <BlogSearch />
                                    <BlogCategory />
                                    <BlogLatestPost />
                                    <BlogQuery />
                                    <BlogTags />
                                </div>
                            </div>
                            {/* End Sidebar */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}
