import React from 'react';
import {Link} from 'react-router-dom';
import PortfolioAdBanner from './PortfolioAdBanner';
import PortfolioNewsletter from './PortfolioNewsletter';
import PortfolioTag from './PortfolioTag';

export default class SinglePortfolioContent extends React.Component {
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
        let publicUrl = process.env.PUBLIC_URL+'/';
        return (
            <>
                <section className="protfolio-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Protfolio Details Content */}
                            <div className="col-xl-7 col-lg-7">
                                <div className="protfolio-details__content">
                                    <div className="protfolio-details__content-img1">
                                        <img src={publicUrl+"assets/images/project/protfolio-details-img1.jpg"} alt="" />
                                    </div>

                                    <div className="protfolio-details__content-text1">
                                        <p>Çalışma ve büyük acı. En azından izin verin, çalışma sırasında rahatlama için izin verin. 
                                            Ağrıya rağmen sevinç veren, acı ve sıkıntı veren. Sorumluluk taşımayan kişiler tarafından verilen,
                                            suçlu olan ve ceza almayanlar tarafından yapılanlar. Herkesin doğuştan gelen hata yaptığı yerden gelen
                                            acıların açıklaması.</p>
                                    </div>

                                    <div className="protfolio-details__content-text2">
                                        <p>En azından izin verin, çalışma sırasında rahatlama için izin verin. Ağrıya rağmen sevinç veren.</p>
                                    </div>

                                    <div className="protfolio-details__content-img2">
                                        <img src={publicUrl+"assets/images/project/protfolio-details-img2.jpg"} alt="" />
                                        <div className="icon wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms">
                                            <a className="video-popup" title="Video" href="https://www.youtube.com/watch?v=p25gICT63ek">
                                                <span className="icon-play-button"></span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="protfolio-details__content-text3">
                                        <p>Kimse kendi isteğiyle acı çekmek istemez, çünkü acı hoş değildir, ama bazen büyük acılar ortaya çıkar
                                            ve arama yapılır. Hiç kimse, acı çekmek istemez, ama doğru zamanı geldiğinde arayışa girer.</p>
                                    </div>

                                    <div className="protfolio-details__content-img3">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="protfolio-details__content-img3-single">
                                                    <img src={publicUrl+"assets/images/project/protfolio-details-img3.jpg"} alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="protfolio-details__content-img3-single">
                                                    <img src={publicUrl+"assets/images/project/protfolio-details-img4.jpg"} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="protfolio-details__content-text4">
                                        <p>En azından izin verin, çalışma sırasında rahatlama için izin verin. Ağrıya rağmen sevinç veren.
                                            Sorumluluk taşımayan kişiler tarafından verilen, suçlu olan ve ceza almayanlar tarafından yapılanlar.
                                            Herkesin doğuştan gelen hata yaptığı yerden gelen acıların açıklaması.</p>
                                    </div>

                                    <div className="protfolio-details__content-text5">
                                        <p>Kimse kendi isteğiyle acı çekmek istemez, çünkü acı hoş değildir, ama bazen büyük acılar ortaya çıkar
                                            ve arama yapılır. Hiç kimse, acı çekmek istemez, ama doğru zamanı geldiğinde arayışa girer.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Protfolio Details Content */}

                            {/* Start Protfolio Details Sidebar */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="protfolio-details__sidebar">
                                    {/* Start Protfolio Details Sidebar Single */}
                                    <div className="protfolio-details__sidebar-single protfolio-details-category">
                                        <div className="title">
                                            <h2>Kategori</h2>
                                        </div>
                                        <ul className="protfolio-details-category-list">
                                            <li><Link to={process.env.PUBLIC_URL + `/`} className="active">Ev Satın Alma<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Malzeme Yönetimi<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Mülk Yönetimi<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Teminat Hizmetleri<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>İpotek Hizmeti<span className="icon-right-arrow"></span></Link></li>
                                        </ul>
                                    </div>
                                    {/* End Protfolio Details Sidebar Single */}

                                    <PortfolioAdBanner />
                                    <PortfolioTag />
                                    <PortfolioNewsletter />
                                </div>
                            </div>
                            {/* End Protfolio Details Sidebar */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
