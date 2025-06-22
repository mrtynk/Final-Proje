import React from 'react';
import {Link} from 'react-router-dom';
import BlogCategory from '../blog/BlogCategory';
import BlogLatestPost from '../blog/BlogLatestPost';
import BlogQuery from '../blog/BlogQuery';
import BlogSearch from '../blog/BlogSearch';
import BlogTags from '../blog/BlogTags';

export default class SingleBlogDetails extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        return (
            <>
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7">
                                <div className="blog-details__left">
                                    <div className="blog-details__img">
                                        <img src={publicUrl+"assets/images/blog/blog-details-img-1.jpg"} alt="" />
                                        <div className="blog-details__date">
                                            <p> <span>10</span> <br /> Eki</p>
                                        </div>
                                    </div>
                                    <div className="blog-details__content">
                                        <ul className="blog-details__meta">
                                            <li><Link to={process.env.PUBLIC_URL + `/`}><i className="fa fa-bookmark"></i><span>Kurumsal</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}><i className="fa fa-user"></i><span>Paul Smith</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}><i className="fa fa-comments"></i><span>0 Yorum</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}><i className="fa fa-heart"></i><span>0 Beğeni</span></Link></li>
                                        </ul>
                                        <h3 className="blog-details__title">Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                            aut odit aut fugit</h3>
                                        <p className="blog-details__text-1">Ut enim ad minim veniam, nostrud egzersiz yapmak isteyenler için, rahatlıkla uyum sağlar. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                            illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                        <p className="blog-details__text-2">Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                            omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                    </div>
                                    <div className="blog-details__content-two">
                                        <div className="blog-details__content-two-img">
                                            <img src={publicUrl+"assets/images/blog/blog-details-img-2.jpg"} alt="" />
                                        </div>
                                        <div className="blog-details__content-two-details">
                                            <h3 className="blog-details__content-two-title">Bina Yenileme</h3>
                                            <p className="blog-details__content-two-text-1">Labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur. Excepteur sint </p>
                                            <p className="blog-details__content-two-text-2">Ut enim ad minim veniam, nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate </p>
                                            <ul className="blog-details__content-two-points">
                                                <li>Yaşamak öyle hareket ettirir ki balıklar suda otlar ağaç taze değildir.</li>
                                                <li>Canavar kendisi işaret etmezler ama birlikte işaretler çağrılırlar.</li>
                                                <li>Erkek altıncı bölme akşam hepsi yeşil olabilir mevsimler dedi.</li>
                                                <li>Bölünmüş ışıklar, dileklerle toprak derin bolca da olabilir.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-details__bottom">
                                        <p className="blog-details__tags">
                                            <Link to={process.env.PUBLIC_URL + `/`}>Ofis</Link>
                                            <Link to={process.env.PUBLIC_URL + `/`}>Tasarım</Link>
                                            <Link to={process.env.PUBLIC_URL + `/`}>İnşaat</Link>
                                        </p>
                                        <div className="blog-details__social-list">
                                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                            <a href="https://facebook.com/"><i className="fab fa-facebook"></i></a>
                                            <a href="https://pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="author-one">
                                        <div className="inner">
                                            <div className="author-one__image">
                                                <img src={publicUrl+"assets/images/blog/author-1-1.jpg"} alt="" />
                                            </div>
                                            <div className="author-one__content">
                                                <h3>Hover Cameron</h3>
                                                <p>Onlar sığırlar sahipti, sen dişi, tohum yaşıyor, gök yüzü, çamur diyorsun,
                                                    karanlık yap, cennet yüzü Karayip yüzeyi diyor, olmadan.</p>
                                                <ul>
                                                    <li><a href="https://facebook.com/"><i className="fab fa-facebook-square" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://twitter.com/"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://instagram.com/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://google.com/"><i className="fab fa-google" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-one">
                                        <h3 className="comment-one__title">Yorumlar (2)</h3>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image">
                                                <img src={publicUrl+"assets/images/blog/comment-1-1.jpg"} alt="" />
                                            </div>
                                            <div className="comment-one__content">
                                                <h3>Suren Sumi</h3>
                                                <p>Kutsanmış cennet mevsimlerinde adam görüntü boş mevsimlerde verildi büyük
                                                    uçar çoğalır, emin olabilirsin ağrı ölçümü iyidir.</p>
                                                <span>03 Şubat 2022 <Link to={process.env.PUBLIC_URL + `/`} className="comment-one__btn">Yanıtla</Link></span>
                                            </div>
                                        </div>

                                        <div className="comment-one__single">
                                            <div className="comment-one__image">
                                                <img src={publicUrl+"assets/images/blog/comment-1-2.jpg"} alt="" />
                                            </div>
                                            <div className="comment-one__content">
                                                <h3>Jessica Brown</h3>
                                                <p>Kutsanmış cennet mevsimlerinde adam görüntü boş mevsimlerde verildi büyük
                                                    uçar çoğalır, emin olabilirsin ağrı ölçümü iyidir.</p>
                                                <span>03 Şubat 2022 <Link to={process.env.PUBLIC_URL + `/`} className="comment-one__btn">Yanıtla</Link></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-form">
                                        <h3 className="comment-form__title">Bir Yorum Bırakın</h3>
                                        <form action="#" className="comment-one__form contact-form-validated"
                                            noValidate>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Adınız" name="name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box">
                                                        <input type="email" placeholder="E-posta Adresi" name="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box comment-form__textarea">
                                                        <textarea name="message" placeholder="Yorum Yazın"></textarea>
                                                    </div>

                                                    <div className="comment-form__btn-box">
                                                        <button className="thm-btn comment-form__btn" data-text="Yorumu Gönder +" type="submit" 
                                                        data-loading-text="Lütfen bekleyin...">Yorumu Gönder +</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Start Sidebar */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="sidebar">
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
