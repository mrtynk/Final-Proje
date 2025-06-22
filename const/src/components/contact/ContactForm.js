import React from 'react';

export default class ContactForm extends React.Component {
    render(){
        return (
            <>
                <div className="contact-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-5">
                                <div className="contact-page__content">
                                    <div className="title">
                                        <h2>İletişime Geçin</h2>
                                    </div>

                                    <div className="contact-page__content-single">
                                        <div className="contact-page__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-pin"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>Adres</h2>
                                                <p>46 Suvastu Arcade, 3. Kat <br /> Palace Road, Londra.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-page__content-single">
                                        <div className="contact-page__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-phone-call-1"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>Telefon</h2>
                                                <p className="number1"><a href="tel:123456789">88 256 256 2584</a></p>
                                                <p className="number2"><a href="tel:123456789">88 256 256 2584</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-page__content-single">
                                        <div className="contact-page__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-email"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>E-posta</h2>
                                                <p className="email1"><a href="mailto:info@madina.com">info@madina.com</a></p>
                                                <p className="email2"><a href="mailto:info@madina.com">info@madina.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-8 col-lg-8 col-md-7">
                                <div className="contact-page__form">
                                    <form action="#" className="comment-one__form contact-form-validated" noValidate>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Ad Soyad" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="email" placeholder="E-posta Adresi" name="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Telefon" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Konu" name="subject" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="comment-form__input-box text-message-box">
                                                    <textarea name="message" placeholder="Mesajınız"></textarea>
                                                </div>

                                                <button className="thm-btn comment-form__btn" data-text="Mesaj Gönder +"
                                                    type="submit" data-loading-text="Lütfen bekleyin...">Mesaj Gönder +</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
