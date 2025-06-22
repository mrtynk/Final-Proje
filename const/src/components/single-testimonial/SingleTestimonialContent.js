import React from 'react';

export default class SingleTestimonialContent extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            <>
                <section className="testimonials-three testimonials-three--testimonials">
                    <div className="container">
                        <div className="row">
                            {/* Tek Yorum Başlangıcı */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonials-three__single">
                                    <div className="quote-icon">
                                        <span className="fa fa-quote-right"></span>
                                    </div>
                                    <div className="img-box">
                                        <img src={publicUrl + "assets/images/update1.0/testimonials-v3-img1.jpg"} alt="#" />
                                    </div>
                                    <div className="testimonials-three__single-inner">
                                        <div className="title-box">
                                            <h3>Jhon Smith</h3>
                                            <span>Laboratuvar CEO'su</span>
                                        </div>

                                        <div className="text-box">
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğunluğu mizah katılarak ya da rastgele kelimelerle bazı değişikliklere uğramıştır.</p>
                                        </div>

                                        <ul className="rating-box">
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star-1"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Tek Yorum Sonu */}

                            {/* Tek Yorum Başlangıcı */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonials-three__single">
                                    <div className="quote-icon">
                                        <span className="fa fa-quote-right"></span>
                                    </div>
                                    <div className="img-box">
                                        <img src={publicUrl + "assets/images/update1.0/testimonials-v3-img2.jpg"} alt="#" />
                                    </div>
                                    <div className="testimonials-three__single-inner">
                                        <div className="title-box">
                                            <h3>David Cooper</h3>
                                            <span>Laboratuvar CEO'su</span>
                                        </div>

                                        <div className="text-box">
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğunluğu mizah katılarak ya da rastgele kelimelerle bazı değişikliklere uğramıştır.</p>
                                        </div>

                                        <ul className="rating-box">
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star-1"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Tek Yorum Sonu */}

                            {/* Diğer yorumlar da aynı şekilde çevrilmiştir */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonials-three__single">
                                    <div className="quote-icon">
                                        <span className="fa fa-quote-right"></span>
                                    </div>
                                    <div className="img-box">
                                        <img src={publicUrl + "assets/images/update1.0/testimonials-v3-img11.jpg"} alt="#" />
                                    </div>
                                    <div className="testimonials-three__single-inner">
                                        <div className="title-box">
                                            <h3>Hashim Amla</h3>
                                            <span>Laboratuvar CEO'su</span>
                                        </div>

                                        <div className="text-box">
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğunluğu mizah katılarak ya da rastgele kelimelerle bazı değişikliklere uğramıştır.</p>
                                        </div>

                                        <ul className="rating-box">
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star-1"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Diğer yorumlar için metinler aynı şekilde çevrildi */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonials-three__single">
                                    <div className="quote-icon">
                                        <span className="fa fa-quote-right"></span>
                                    </div>
                                    <div className="img-box">
                                        <img src={publicUrl + "assets/images/update1.0/testimonials-v3-img12.jpg"} alt="#" />
                                    </div>
                                    <div className="testimonials-three__single-inner">
                                        <div className="title-box">
                                            <h3>Moeen Ali</h3>
                                            <span>Laboratuvar CEO'su</span>
                                        </div>

                                        <div className="text-box">
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğunluğu mizah katılarak ya da rastgele kelimelerle bazı değişikliklere uğramıştır.</p>
                                        </div>

                                        <ul className="rating-box">
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star-1"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Diğer yorumlar aşağıdaki gibi */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonials-three__single">
                                    <div className="quote-icon">
                                        <span className="fa fa-quote-right"></span>
                                    </div>
                                    <div className="img-box">
                                        <img src={publicUrl + "assets/images/update1.0/testimonials-v3-img13.jpg"} alt="#" />
                                    </div>
                                    <div className="testimonials-three__single-inner">
                                        <div className="title-box">
                                            <h3>Jada Christian</h3>
                                            <span>Laboratuvar CEO'su</span>
                                        </div>

                                        <div className="text-box">
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğunluğu mizah katılarak ya da rastgele kelimelerle bazı değişikliklere uğramıştır.</p>
                                        </div>

                                        <ul className="rating-box">
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star-1"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonials-three__single">
                                    <div className="quote-icon">
                                        <span className="fa fa-quote-right"></span>
                                    </div>
                                    <div className="img-box">
                                        <img src={publicUrl + "assets/images/update1.0/testimonials-v3-img14.jpg"} alt="#" />
                                    </div>
                                    <div className="testimonials-three__single-inner">
                                        <div className="title-box">
                                            <h3>Kevin Deen</h3>
                                            <span>Laboratuvar CEO'su</span>
                                        </div>

                                        <div className="text-box">
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğunluğu mizah katılarak ya da rastgele kelimelerle bazı değişikliklere uğramıştır.</p>
                                        </div>

                                        <ul className="rating-box">
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star-1"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonials-three__single">
                                    <div className="quote-icon">
                                        <span className="fa fa-quote-right"></span>
                                    </div>
                                    <div className="img-box">
                                        <img src={publicUrl + "assets/images/update1.0/testimonials-v3-img15.jpg"} alt="#" />
                                    </div>
                                    <div className="testimonials-three__single-inner">
                                        <div className="title-box">
                                            <h3>Kevin Martin</h3>
                                            <span>Laboratuvar CEO'su</span>
                                        </div>

                                        <div className="text-box">
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğunluğu mizah katılarak ya da rastgele kelimelerle bazı değişikliklere uğramıştır.</p>
                                        </div>

                                        <ul className="rating-box">
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star-1"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonials-three__single">
                                    <div className="quote-icon">
                                        <span className="fa fa-quote-right"></span>
                                    </div>
                                    <div className="img-box">
                                        <img src={publicUrl + "assets/images/update1.0/testimonials-v3-img16.jpg"} alt="#" />
                                    </div>
                                    <div className="testimonials-three__single-inner">
                                        <div className="title-box">
                                            <h3>James Martin</h3>
                                            <span>Laboratuvar CEO'su</span>
                                        </div>

                                        <div className="text-box">
                                            <p>Lorem Ipsum pasajlarının birçok çeşidi vardır, ancak çoğunluğu mizah katılarak ya da rastgele kelimelerle bazı değişikliklere uğramıştır.</p>
                                        </div>

                                        <ul className="rating-box">
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star-1"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Yorumlar Sonu */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
