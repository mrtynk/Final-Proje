import React from 'react';
import {Link} from 'react-router-dom';
import ButtonBox from './ButtonBox';
import ServiceContactBox from './ServiceContactBox';
import ServiceSearch from './ServiceSearch';

export default class SingleArchitectureDesign extends React.Component {
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
          
    }
    render(){
    let publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <>
            <section className="services-details-page">
                <div className="container">
                    <div className="row">
                        {/* Hizmet Detayları İçeriği Başlangıç */}
                        <div className="col-xl-7 col-lg-7">
                            <div className="services-details__content">
                                <div className="services-details__img1">
                                    <img src={publicUrl + "assets/images/services/services-details-img1.jpg"} alt="" />
                                </div>
                                <div className="services-details__text-box1">
                                    <div className="title">
                                        <h2>Genel Müteahhitlik</h2>
                                    </div>
                                    <p className="text-1">Büyük emek ve çaba gerektiren işler. En azından küçük bir örnekle başlayalım, kimse boş yere emek sarf etmez. Rahatlıkla anlayabiliriz ki, önemli olan verimli çalışmaktır. </p>

                                    <p className="text-2">Minik bir örnek verelim, detaylı incelemelerle yapılan işler daha başarılıdır. Bu yüzden, her şey tam ve eksiksiz yapılmalıdır.</p>
                                </div>

                                <div className="services-details__text-box2">
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="services-details__text-box2-img">
                                                <img src={publicUrl + "assets/images/services/services-details-img2.jpg"} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-xl-7">
                                            <div className="services-details__text-box2-content">
                                                <div className="title">
                                                    <h2>Planlama Çalışması</h2>
                                                </div>
                                                <div className="text">
                                                    <p>Rahat bir çalışma ortamı sağlanmalıdır.</p>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tick"></span>
                                                        </div>

                                                        <div className="text">
                                                            <p>En azından küçük bir örnek verelim</p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tick"></span>
                                                        </div>

                                                        <div className="text">
                                                            <p>Rahat çalışma ortamı önemlidir</p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tick"></span>
                                                        </div>

                                                        <div className="text">
                                                            <p>Detaylı inceleme gereklidir</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="services-details__text-box3">
                                    <p>Hiç kimse keyfi için zahmete girmez. Herkes en iyi sonucu ister. Bu yüzden detaylı çalışmalar önemlidir.</p>

                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-tick"></span>
                                            </div>

                                            <div className="text">
                                                <p>Çalışmalar doğru şekilde planlanmalı</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-tick"></span>
                                            </div>

                                            <div className="text">
                                                <p>Her adım dikkatle takip edilmeli</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Hizmet Detayları Sekmeler Kısmı Başlangıç */}
                                <div className="services-details__tab-box">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="services-details__tab tabs-box">
                                                <div className="services-details__tab-button">
                                                    <ul className="tab-buttons clearfix">
                                                        <li data-tab="#materials" className="tab-btn active-btn">
                                                            <h4>Kaliteli Malzemeler</h4>
                                                        </li>
                                                        <li data-tab="#design" className="tab-btn">
                                                            <h4>İç Tasarım</h4>
                                                        </li>
                                                        <li data-tab="#care" className="tab-btn">
                                                            <h4>Kişisel Bakım</h4>
                                                        </li>
                                                        <li data-tab="#support" className="tab-btn">
                                                            <h4>Üstün Destek</h4>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="tabs-content">
                                                    {/* Sekme Başlangıç */}
                                                    <div className="tab active-tab" id="materials">
                                                        <div className="services-details__tab-content-item">
                                                            <div className="quality-materials-tab-box">
                                                                <div className="row">
                                                                    <div className="col-xl-6">
                                                                        <div className="quality-materials-tab-box-img">
                                                                            <img src={publicUrl + "assets/images/services/services-details-img3.jpg"} alt="" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-xl-6">
                                                                        <div className="quality-materials-tab-box-content">
                                                                            <p className="text1">Önemli detaylar üzerinde durulur ve en kaliteli malzemeler kullanılır.</p>

                                                                            <p className="text2">Her aşamada kalite ve dayanıklılık ön plandadır.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Sekme Son */}
                                                    {/* Burada diğer sekmelerin içeriği de benzer şekilde çevrilebilir. */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Hizmet Detayları Sekmeler Kısmı Son */}
                            </div>
                        </div>
                        {/* Hizmet Detayları İçeriği Son */}

                        {/* Hizmet Detayları Kenar Çubuğu Başlangıç */}
                        <div className="col-xl-5 col-lg-5">
                            <div className="services-details__sidebar">
                                <ServiceSearch />

                                {/* Hizmet Kategorileri */}
                                <div className="services-details__sidebar-single services-details-category">
                                    <div className="title">
                                        <h2>Hizmet Kategorileri</h2>
                                    </div>
                                    <ul className="services-details-category-list">
                                        <li><Link to={publicUrl + `/general-contracting`}>Genel Müteahhitlik<span className="icon-right-arrow"></span></Link></li>
                                        <li><Link to={publicUrl + `/metrial-managment`}>Malzeme Yönetimi<span className="icon-right-arrow"></span></Link></li>
                                        <li><Link to={publicUrl + `/building-renovation`}>Bina Yenileme<span className="icon-right-arrow"></span></Link></li>
                                        <li><Link to={publicUrl + `/architecture-design`} className="active">Mimari Tasarım<span className="icon-right-arrow"></span></Link></li>
                                        <li><Link to={publicUrl + `/multistory-build`}>Çok Katlı Bina İnşaatı<span className="icon-right-arrow"></span></Link></li>
                                    </ul>
                                </div>

                                <ButtonBox />
                                <ServiceContactBox />
                            </div>
                        </div>
                        {/* Hizmet Detayları Kenar Çubuğu Son */}
                    </div>
                </div>
            </section>
        </>
    )
}

}