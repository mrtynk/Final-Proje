import React from 'react';
import { Link } from 'react-router-dom';

export default class SingleTeamContent extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    return (
      <>
        <section className="team-details-top">
          <div className="container">
            <div className="row">
              {/* Takım Detayları Üst Müşteri Bilgisi */}
              <div className="col-xl-3">
                <div className="team-details-top__client-info text-center">
                  <div className="img-box">
                    <img src={publicUrl + "assets/images/team/team-details-img1.jpg"} alt="#" />
                  </div>
                  <div className="content-box">
                    <h2>Jhon Smith</h2>
                    <span>Yaratıcı Çalışan</span>
                    <p>Mevsimler üzerindeyken denizlerin ortasında, her gece yıldızları yönetirsin, hepsi canlıdır</p>
                    <ul>
                      <li><a href="https://facebook.com/"><span className="fab fa-facebook"></span></a></li>
                      <li><a href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
                      <li><a href="https://dribbble.com/"><span className="fab fa-dribbble"></span></a></li>
                      <li><a href="https://twitter.com/"><span className="fab fa-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Takım Detayları Üst Müşteri Bilgisi Sonu */}

              {/* Takım Detayları Üst İçerik */}
              <div className="col-xl-9">
                <div className="team-details-top__content">
                  <div className="title-box">
                    <h2>Merhaba, Ben Jhon Smith, Kaliforniya'dan <br /> Yaratıcı Çalışan</h2>
                  </div>
                  <div className="text-box">
                    <p>
                      Gün benzeri şeyler. Tohum çoğalır, görüntü başlar. İlk meyveler kutsanmıştır, büyük olan o kutsanmıştır, üçüncü kural küçük olan biridir, onlar oradadır. Et vardı, kendisi söyleniyordu, meyve verdi ona ki hareket etti. Karanlık görüldü, çok söylenirken sabah için dördüncü hayvan dedi, sen orada. Hayat et yaşıyor. Kendisini derin hareket ettirip küçük iyilik getirdi, hayvan akşam toplanmasını haritaladı, altıncı açtı, daha büyük getirdi. Yaşayan sular ki getirir, toprak.
                    </p>
                  </div>

                  <div className="team-details-top__content-info">
                    <div className="row">
                      {/* Takım Detayları Üst İçerik Bilgi Tekli */}
                      <div className="col-xl-4 col-lg-4">
                        <div className="team-details-top__content-info-single">
                          <ul>
                            <li>
                              <div className="title">
                                <h5>İsim :</h5>
                              </div>
                              <div className="text">
                                <p>Jhon Smith</p>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <h5>Telefon :</h5>
                              </div>
                              <div className="text">
                                <p><a href="tel:123456789">009 (650)-236-550</a></p>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <h5>Doğum :</h5>
                              </div>
                              <div className="text">
                                <p>03 Ekim 2022</p>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <h5>Şehir :</h5>
                              </div>
                              <div className="text">
                                <p>Los Angeles</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Takım Detayları Üst İçerik Bilgi Tekli Sonu */}

                      {/* Takım Detayları Üst İçerik Bilgi Tekli */}
                      <div className="col-xl-4 col-lg-4">
                        <div className="team-details-top__content-info-single">
                          <ul>
                            <li>
                              <div className="title">
                                <h5>E-posta :</h5>
                              </div>
                              <div className="text">
                                <p><a href="mailto:yourmail@email.com">info@const.com</a></p>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <h5>FAX :</h5>
                              </div>
                              <div className="text">
                                <p><a href="tel:123456789">009 (650)-236-550</a></p>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <h5>Websitesi :</h5>
                              </div>
                              <div className="text">
                                <p><a href="https://www.mnsut.com/">www.const.com</a></p>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <h5>Dil :</h5>
                              </div>
                              <div className="text">
                                <p>İngilizce, Hintçe</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Takım Detayları Üst İçerik Bilgi Tekli Sonu */}

                      {/* Takım Detayları Üst İçerik Bilgi Tekli */}
                      <div className="col-xl-4 col-lg-4">
                        <div className="team-details-top__content-info-single">
                          <ul>
                            <li>
                              <div className="title">
                                <h5>Eğitim :</h5>
                              </div>
                              <div className="text">
                                <p>Oxford Üniversitesi</p>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <h5>İlgi Alanı :</h5>
                              </div>
                              <div className="text">
                                <p>UX/UI Tasarımı</p>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <h5>Hobi :</h5>
                              </div>
                              <div className="text">
                                <p>Kitap Okumak</p>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <h5>Freelance :</h5>
                              </div>
                              <div className="text">
                                <p>Şu Anda Müsait</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Takım Detayları Üst İçerik Bilgi Tekli Sonu */}
                    </div>
                  </div>
                  <div className="team-details-top__content-btn">
                    <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn" data-text="bana ulaş  +">bana ulaş +</Link>
                  </div>
                </div>
              </div>
              {/* Takım Detayları Üst İçerik Sonu */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
