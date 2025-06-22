import React from 'react';

export default class TestimonialThree extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".testimonials-three__carousel").length) {
            $(".testimonials-three__carousel").owlCarousel({
              loop: true,
              margin: 50,
              nav: true,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 10000,
              navText: [
                '<i class="icon-right-arrow left"></i>',
                '<i class="icon-right-arrow"></i>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                800: {
                  items: 2,
                },
                992: {
                  items: 2,
                },
                1200: {
                  items: 2,
                },
              },
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        return (
            <>
                <section className="testimonials-three">
                    <div className="testimonials-three__img1 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img7.jpg"} alt="#" />
                    </div>

                    <div className="testimonials-three__img2 float-bob-y">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img3.jpg"} alt="#" />
                    </div>

                    <div className="testimonials-three__img3 float-bob-y">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img4.jpg"} alt="#" />
                    </div>

                    <div className="testimonials-three__img4 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img10.jpg"} alt="#" />
                    </div>

                    <div className="testimonials-three__img5 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img1.jpg"} alt="#" />
                    </div>

                    <div className="testimonials-three__img6 float-bob-y">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img8.jpg"} alt="#" />
                    </div>

                    <div className="testimonials-three__img7 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img6.jpg"} alt="#" />
                    </div>

                    <div className="testimonials-three__img8 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img5.jpg"} alt="#" />
                    </div>

                    <div className="testimonials-three__img9 float-bob-y">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img9.jpg"} alt="#" />
                    </div>
                    <div className="container">
                        <div className="sec-title">
                            <div className="sec-title__tagline">
                                <h6>Referanslarımız</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Müşterilerimizin Tatlı Sözü</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonials-three__carousel owl-carousel owl-theme">
                                    {/* Referans Tekli Başlangıç */}
                                    <div className="testimonials-three__single">
                                        <div className="quote-icon">
                                            <span className="fa fa-quote-right"></span>
                                        </div>
                                        <div className="img-box">
                                            <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img1.jpg"} alt="#" />
                                        </div>
                                        <div className="testimonials-three__single-inner">
                                            <div className="title-box">
                                                <h3>Jhon Smith</h3>
                                                <span>Laboratuvar CEO'su</span>
                                            </div>

                                            <div className="text-box">
                                                <p>Birçok Lorem Ipsum pasajı mevcut, ancak çoğu birtakım değişikliklere uğramış, mizah eklenmiş ya da kelimeler rastgele değiştirilmiştir.</p>
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
                                    {/* Referans Tekli Son */}

                                    {/* Referans Tekli Başlangıç */}
                                    <div className="testimonials-three__single">
                                        <div className="quote-icon">
                                            <span className="fa fa-quote-right"></span>
                                        </div>
                                        <div className="img-box">
                                            <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img2.jpg"} alt="#" />
                                        </div>
                                        <div className="testimonials-three__single-inner">
                                            <div className="title-box">
                                                <h3>David Cooper</h3>
                                                <span>Laboratuvar CEO'su</span>
                                            </div>

                                            <div className="text-box">
                                                <p>Birçok Lorem Ipsum pasajı mevcut, ancak çoğu birtakım değişikliklere uğramış, mizah eklenmiş ya da kelimeler rastgele değiştirilmiştir.</p>
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
                                    {/* Referans Tekli Son */}

                                    {/* Referans Tekli Başlangıç */}
                                    <div className="testimonials-three__single">
                                        <div className="quote-icon">
                                            <span className="fa fa-quote-right"></span>
                                        </div>
                                        <div className="img-box">
                                            <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img1.jpg"} alt="#" />
                                        </div>
                                        <div className="testimonials-three__single-inner">
                                            <div className="title-box">
                                                <h3>Jhon Smith</h3>
                                                <span>Laboratuvar CEO'su</span>
                                            </div>

                                            <div className="text-box">
                                                <p>Birçok Lorem Ipsum pasajı mevcut, ancak çoğu birtakım değişikliklere uğramış, mizah eklenmiş ya da kelimeler rastgele değiştirilmiştir.</p>
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
                                    {/* Referans Tekli Son */}

                                    {/* Referans Tekli Başlangıç */}
                                    <div className="testimonials-three__single">
                                        <div className="quote-icon">
                                            <span className="fa fa-quote-right"></span>
                                        </div>
                                        <div className="img-box">
                                            <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img2.jpg"} alt="#" />
                                        </div>
                                        <div className="testimonials-three__single-inner">
                                            <div className="title-box">
                                                <h3>David Cooper</h3>
                                                <span>Laboratuvar CEO'su</span>
                                            </div>

                                            <div className="text-box">
                                                <p>Birçok Lorem Ipsum pasajı mevcut, ancak çoğu birtakım değişikliklere uğramış, mizah eklenmiş ya da kelimeler rastgele değiştirilmiştir.</p>
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
                                    {/* Referans Tekli Son */}

                                    {/* Referans Tekli Başlangıç */}
                                    <div className="testimonials-three__single">
                                        <div className="quote-icon">
                                            <span className="fa fa-quote-right"></span>
                                        </div>
                                        <div className="img-box">
                                            <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img1.jpg"} alt="#" />
                                        </div>
                                        <div className="testimonials-three__single-inner">
                                            <div className="title-box">
                                                <h3>Jhon Smith</h3>
                                                <span>Laboratuvar CEO'su</span>
                                            </div>

                                            <div className="text-box">
                                                <p>Birçok Lorem Ipsum pasajı mevcut, ancak çoğu birtakım değişikliklere uğramış, mizah eklenmiş ya da kelimeler rastgele değiştirilmiştir.</p>
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
                                    {/* Referans Tekli Son */}

                                    {/* Referans Tekli Başlangıç */}
                                    <div className="testimonials-three__single">
                                        <div className="quote-icon">
                                            <span className="fa fa-quote-right"></span>
                                        </div>
                                        <div className="img-box">
                                            <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img2.jpg"} alt="#" />
                                        </div>
                                        <div className="testimonials-three__single-inner">
                                            <div className="title-box">
                                                <h3>David Cooper</h3>
                                                <span>Laboratuvar CEO'su</span>
                                            </div>

                                            <div className="text-box">
                                                <p>Birçok Lorem Ipsum pasajı mevcut, ancak çoğu birtakım değişikliklere uğramış, mizah eklenmiş ya da kelimeler rastgele değiştirilmiştir.</p>
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
                                    {/* Referans Tekli Son */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
