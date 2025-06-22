import React from 'react';
import {Link} from 'react-router-dom';

export default class FeatureFive extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
              e.preventDefault();
              var target = $($(this).attr("data-tab"));
        
              if ($(target).is(":visible")) {
                return false;
              } else {
                target
                  .parents(".tabs-box")
                  .find(".tab-buttons")
                  .find(".tab-btn")
                  .removeClass("active-btn");
                $(this).addClass("active-btn");
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .fadeOut(0);
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
              }
            });
        }

        if ($(".feature-three__history-carousel").length) {
            $(".feature-three__history-carousel").owlCarousel({
              loop: false,
              margin: 30,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 6000,
              navText: [
                '<i className="fa fa-angle-double-left" aria-hidden="true"></i>',
                '<i className="fa fa-angle-double-right" aria-hidden="true"></i>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                992: {
                  items: 2,
                },
                1200: {
                  items: 3,
                },
                1350: {
                  items: 3,
                },
              },
            });
        }
          
    }
    render(){
    let publicUrl = process.env.PUBLIC_URL+'/';
    return (
        <>
            <section className="feature-three-sec clearfix">
                <div className="feature-three__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/features-v1-bg.jpg)'}}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="feature-three__title">
                                <div className="sec-title">
                                    <div className="sec-title__tagline">
                                        <h6>Hakkımızda Daha Fazla</h6> <span className="right"></span>
                                    </div>
                                    <h2 className="sec-title__title">Tutarlılık ile <br /> Tasarım ve İnşaat</h2>
                                    <p className="sec-title__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="feature-three__tab tabs-box">
                                <div className="feature-three__tab-button">
                                    <ul className="tab-buttons clearfix">
                                        <li data-tab="#history" className="tab-btn active-btn">
                                            <h3>Tarihçemiz</h3>
                                        </li>
                                        <li data-tab="#growth" className="tab-btn">
                                            <h3>Büyümemiz</h3>
                                        </li>
                                        <li data-tab="#mission" className="tab-btn">
                                            <h3>Misyonumuz</h3>
                                        </li>
                                        <li data-tab="#vision" className="tab-btn">
                                            <h3>Vizyonumuz</h3>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tabs-content">
                                    {/* Tarihçe Tabı */}
                                    <div className="tab active-tab" id="history">
                                        <div className="feature-three__tab-content-item">
                                            <div className="feature-three__history-carousel owl-carousel owl-theme">

                                                {/* Tarihçe Tekil */}
                                                <div className="feature-three__history-single">
                                                    <div className="history-text">
                                                        <h2>Tarihçe</h2>
                                                    </div>
                                                    <div className="date-box">
                                                        <h2>1996-2000</h2>
                                                    </div>
                                                    <p>Bir okuyucunun, bir sayfanın düzenine baktığında okunabilir içerikten
                                                        dikkatinin dağılacağı uzun zamandır bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,
                                                        bunun daha-az-daha-normal bir dağılıma sahip olmasıdır.</p>
                                                </div>

                                                <div className="feature-three__history-single">
                                                    <div className="history-text">
                                                        <h2>Tarihçe</h2>
                                                    </div>
                                                    <div className="date-box">
                                                        <h2>2001-2005</h2>
                                                    </div>
                                                    <p>Bir okuyucunun, bir sayfanın düzenine baktığında okunabilir içerikten
                                                        dikkatinin dağılacağı uzun zamandır bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,
                                                        bunun daha-az-daha-normal bir dağılıma sahip olmasıdır.</p>
                                                </div>

                                                <div className="feature-three__history-single">
                                                    <div className="history-text">
                                                        <h2>Tarihçe</h2>
                                                    </div>
                                                    <div className="date-box">
                                                        <h2>2006-2010</h2>
                                                    </div>
                                                    <p>Bir okuyucunun, bir sayfanın düzenine baktığında okunabilir içerikten
                                                        dikkatinin dağılacağı uzun zamandır bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,
                                                        bunun daha-az-daha-normal bir dağılıma sahip olmasıdır.</p>
                                                </div>

                                                <div className="feature-three__history-single">
                                                    <div className="history-text">
                                                        <h2>Tarihçe</h2>
                                                    </div>
                                                    <div className="date-box">
                                                        <h2>2011-2015</h2>
                                                    </div>
                                                    <p>Bir okuyucunun, bir sayfanın düzenine baktığında okunabilir içerikten
                                                        dikkatinin dağılacağı uzun zamandır bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,
                                                        bunun daha-az-daha-normal bir dağılıma sahip olmasıdır.</p>
                                                </div>

                                                <div className="feature-three__history-single">
                                                    <div className="history-text">
                                                        <h2>Tarihçe</h2>
                                                    </div>
                                                    <div className="date-box">
                                                        <h2>2016-2020</h2>
                                                    </div>
                                                    <p>Bir okuyucunun, bir sayfanın düzenine baktığında okunabilir içerikten
                                                        dikkatinin dağılacağı uzun zamandır bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,
                                                        bunun daha-az-daha-normal bir dağılıma sahip olmasıdır.</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* Büyüme Tabı */}
                                    <div className="tab" id="growth">
                                        <div className="feature-three__tab-content-item">
                                            <div className="tab-content-inner">
                                                <div className="row">
                                                    <div className="col-xl-5 col-lg-6">
                                                        <div className="tab-content-inner-text">
                                                            <h2>Büyümemiz</h2>
                                                            <p>Çeşitli Lorem Ipsum pasajları mevcut olsa da, çoğunluk bazı değişikliklere uğramış,
                                                                mizah katılmış ya da inandırıcılıktan uzak kelimeler içermektedir. Eğer bir Lorem Ipsum pasajı
                                                                kullanacaksanız, içinde rahatsız edici bir şey olmadığından emin olun. İnternetteki tüm Lorem Ipsum
                                                                jeneratörleri önceden belirlenmiş parçaları tekrar etmeye meyillidir.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7 col-lg-6">
                                                        <div className="tab-content-inner-img">
                                                            <img src={publicUrl+"assets/images/resources/feature-v3-img1.jpg"} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Misyon Tabı */}
                                    <div className="tab" id="mission">
                                        <div className="feature-three__tab-content-item">
                                            <div className="tab-content-inner">
                                                <div className="row">
                                                    <div className="col-xl-5 col-lg-6">
                                                        <div className="tab-content-inner-text">
                                                            <h2>Misyonumuz</h2>
                                                            <p>Çeşitli Lorem Ipsum pasajları mevcut olsa da, çoğunluk bazı değişikliklere uğramış,
                                                                mizah katılmış ya da inandırıcılıktan uzak kelimeler içermektedir. Eğer bir Lorem Ipsum pasajı
                                                                kullanacaksanız, içinde rahatsız edici bir şey olmadığından emin olun.</p>
                                                            <div className="btn-box">
                                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Başla +">Başla +</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7 col-lg-6">
                                                        <div className="tab-content-inner-img">
                                                            <img src={publicUrl+"assets/images/resources/feature-v3-img2.jpg"} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Vizyon Tabı */}
                                    <div className="tab" id="vision">
                                        <div className="feature-three__tab-content-item">
                                            <div className="tab-content-inner">
                                                <div className="row">
                                                    <div className="col-xl-5 col-lg-6">
                                                        <div className="tab-content-inner-text">
                                                            <h2>Vizyonumuz</h2>
                                                            <p>Çeşitli Lorem Ipsum pasajları mevcut olsa da, çoğunluk bazı değişikliklere uğramış,
                                                                mizah katılmış ya da inandırıcılıktan uzak kelimeler içermektedir. Eğer bir Lorem Ipsum pasajı
                                                                kullanacaksanız, içinde rahatsız edici bir şey olmadığından emin olun.</p>
                                                            <div className="btn-box">
                                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Başla +">Başla +</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7 col-lg-6">
                                                        <div className="tab-content-inner-img">
                                                            <img src={publicUrl+"assets/images/resources/feature-v3-img3.jpg"} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Tabs */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

}