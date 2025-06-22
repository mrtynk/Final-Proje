import React from 'react';
import {Link} from 'react-router-dom';
import ButtonBox from './ButtonBox';
import ServiceContactBox from './ServiceContactBox';
import ServiceSearch from './ServiceSearch';

export default class SingleGeneralContracting extends React.Component {
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
    let publicUrl = process.env.PUBLIC_URL+'/';
    return (
        <>
            <section className="services-details-page">
                <div className="container">
                    <div className="row">
                        {/* Hizmet Detayları İçeriği Başlangıcı */}
                        <div className="col-xl-7 col-lg-7">
                            <div className="services-details__content">
                                {/* ... (İlk kısım burada, önceki mesajda verdiğim çeviri) */}

                                {/* Hizmet Detayları Sekme Kutusu Başlangıcı */}
                                <div className="services-details__tab-box">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="services-details__tab tabs-box">
                                                <div className="services-details__tab-button">
                                                    <ul className="tab-buttons clearfix">
                                                        <li data-tab="#materials" className="tab-btn active-btn">
                                                            <h4>Kaliteli Malzemeler</h4>
                                                        </li>
                                                        <li data-tab="#design " className="tab-btn">
                                                            <h4>İç Tasarım</h4>
                                                        </li>
                                                        <li data-tab="#care" className="tab-btn">
                                                            <h4>Kişisel Bakım</h4>
                                                        </li>
                                                        <li data-tab="#support" className="tab-btn">
                                                            <h4>Süper Destek</h4>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="tabs-content">
                                                    {/* ... Önceki sekmeler burada */}

                                                    {/* Sekme Başlangıcı */}
                                                    <div className="tab" id="support">
                                                        <div className="services-details__tab-content-item">
                                                            <div className="super-support-tab-box">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="super-support-tab-box-form">
                                                                            <form action="/assets/inc/sendemail.php"
                                                                                className="comment-one__form contact-form-validated"
                                                                                noValidate>
                                                                                <div className="row">
                                                                                    <div className="col-xl-6 col-lg-6">
                                                                                        <div className="comment-form__input-box">
                                                                                            <input type="text"
                                                                                                placeholder="Tam Adınız"
                                                                                                name="name" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6 col-lg-6">
                                                                                        <div className="comment-form__input-box">
                                                                                            <input type="email"
                                                                                                placeholder="E-posta Adresiniz"
                                                                                                name="email" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-xl-12 col-lg-12">
                                                                                        <div className="comment-form__input-box">
                                                                                            <textarea name="message"
                                                                                                placeholder="Mesajınız"></textarea>
                                                                                        </div>
                                                                                        <button
                                                                                            className="thm-btn comment-form__btn"
                                                                                            data-text="Mesaj Gönder +"
                                                                                            type="submit"
                                                                                            data-loading-text="Lütfen bekleyin...">Mesaj
                                                                                            Gönder
                                                                                            +</button>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Sekme Sonu */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Hizmet Detayları Sekme Kutusu Sonu */}
                            </div>
                        </div>
                        {/* Hizmet Detayları İçeriği Sonu */}

                        {/* Hizmet Detayları Kenar Çubuğu Başlangıcı */}
                        <div className="col-xl-5 col-lg-5">
                            <div className="services-details__sidebar">
                                <ServiceSearch />

                                {/* Hizmet Detayları Kenar Çubuğu Tekli Başlangıç */}
                                <div className="services-details__sidebar-single services-details-category">
                                    <div className="title">
                                        <h2>Hizmet Kategorileri</h2>
                                    </div>
                                    <ul className="services-details-category-list">
                                        <li><Link to={process.env.PUBLIC_URL + `/general-contracting`} className="active">Genel Müteahhitlik
                                            <span className="icon-right-arrow"></span></Link>
                                        </li>
                                        <li><Link to={process.env.PUBLIC_URL + `/metrial-managment`}>Malzeme Yönetimi<span className="icon-right-arrow"></span></Link></li>
                                        <li><Link to={publicUrl + `/building-renovation`}>Bina Yenileme<span className="icon-right-arrow"></span></Link></li>
                                        <li><Link to={publicUrl + `/architecture-design`}>Mimari Tasarım<span className="icon-right-arrow"></span></Link></li>
                                        <li><Link to={publicUrl + `/multistory-build`}>Çok Katlı Bina İnşaatı<span className="icon-right-arrow"></span></Link></li>
                                    </ul>
                                </div>
                                {/* Hizmet Detayları Kenar Çubuğu Tekli Sonu */}

                                <ButtonBox />
                                <ServiceContactBox />
                            </div>
                        </div>
                        {/* Hizmet Detayları Kenar Çubuğu Sonu */}
                    </div>
                </div>
            </section>
        </>
    )
}

}