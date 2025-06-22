import React from 'react';
import {Link} from 'react-router-dom';
import BlogCategory from './BlogCategory';
import BlogLatestPost from './BlogLatestPost';
import BlogQuery from './BlogQuery';
import BlogSearch from './BlogSearch';
import BlogTags from './BlogTags';

export default class BlogSix extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        return (
            <>
                <section className="blog-list-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-list__left">
                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img1.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={publicUrl}>Yönetici</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                                    </ul>
                                                    <h2><Link to={publicUrl + `blog-details`}>Çevik İnşaat ile İş Akışını İyileştirin</Link></h2>
                                                    <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                                       espri katılmış veya inanılmaz görünen rastgele kelimeler içerir.</p>
                                                    <div className="btn-box">
                                                        <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img2.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={publicUrl}>Yönetici</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                                    </ul>
                                                    <h2><Link to={publicUrl + `blog-details`}>İnşaatçıların Sorumluluk Sigortası Gerekir Mi?</Link></h2>
                                                    <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                                       espri katılmış veya inanılmaz görünen rastgele kelimeler içerir.</p>
                                                    <div className="btn-box">
                                                        <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img3.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={publicUrl}>Yönetici</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                                    </ul>
                                                    <h2><Link to={publicUrl + `blog-details`}>Fırsatları Değerlendirerek Kazanın</Link></h2>
                                                    <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                                       espri katılmış veya inanılmaz görünen rastgele kelimeler içerir.</p>
                                                    <div className="btn-box">
                                                        <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img4.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={publicUrl}>Yönetici</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                                    </ul>
                                                    <h2><Link to={publicUrl + `blog-details`}>En İyi Çimento Çatı Üreticisi</Link></h2>
                                                    <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                                       espri katılmış veya inanılmaz görünen rastgele kelimeler içerir.</p>
                                                    <div className="btn-box">
                                                        <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img5.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={publicUrl}>Yönetici</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                                    </ul>
                                                    <h2><Link to={publicUrl + `blog-details`}>Çöpte Neler Konulmaz?</Link></h2>
                                                    <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                                       espri katılmış veya inanılmaz görünen rastgele kelimeler içerir.</p>
                                                    <div className="btn-box">
                                                        <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img6.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={publicUrl}>Yönetici</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                                    </ul>
                                                    <h2><Link to={publicUrl + `blog-details`}>İnşaat İçin En İyi 9 Kılavuz</Link></h2>
                                                    <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                                       espri katılmış veya inanılmaz görünen rastgele kelimeler içerir.</p>
                                                    <div className="btn-box">
                                                        <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img7.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={publicUrl}>Yönetici</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={publicUrl}>2 Yorum</Link></li>
                                                    </ul>
                                                    <h2><Link to={publicUrl + `blog-details`}>LEED Sertifikasının Faydaları Nelerdir?</Link></h2>
                                                    <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğu bir şekilde değiştirilmiş,
                                                       espri katılmış veya inanılmaz görünen rastgele kelimeler içerir.</p>
                                                    <div className="btn-box">
                                                        <Link to={publicUrl + `blog-details`}>Devamını Oku <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Styled Pagination */}
                                    <div className="blog-list__pagination">
                                        <ul className="styled-pagination clearfix">
                                            <li className="prev"><Link to={publicUrl}><span className="fa fa-angle-double-left"></span></Link></li>
                                            <li><Link to={publicUrl} className="active">1</Link></li>
                                            <li><Link to={publicUrl}>2</Link></li>
                                            <li><Link to={publicUrl}>3</Link></li>
                                            <li className="next"><Link to={publicUrl}><span className="fa fa-angle-double-right"></span></Link></li>
                                        </ul>
                                    </div>
                                    {/* End Styled Pagination */}
                                </div>
                            </div>

                            {/* Start Sidebar */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar sidebar__blog-list">
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
