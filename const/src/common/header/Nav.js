import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="main-menu text-center">
            <nav>
                <ul className="main-menu__list">
                    <li className="dropdown current">
                        <Link to={process.env.PUBLIC_URL + `/`}>Anasayfa</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/`}>Anasayfa</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Anasayfa İki</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Anasayfa Üç</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-four`}>Anasayfa Dört</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-five`}>Anasayfa Beş</Link></li>
                            <li className="dropdown">
                                <Link to={process.env.PUBLIC_URL + `/`}>Header Stilleri</Link>
                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL + `/`}>Header Bir</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Header İki</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Header Üç</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/home-four`}>Header Dört</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/home-five`}>Header Beş</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Hakkımızda</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/about-one`}>Hakkımızda Bir</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/about-two`}>Hakkımızda İki</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Hizmetler</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Hizmetler</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Genel Taahhüt</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/metrial-managment`}>Malzeme Yönetimi</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/building-renovation`}>Bina Yenileme</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Mimari Tasarım</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/multistory-build`}>Çok Katlı Yapı</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Sayfalar</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/portfolio`}>Portföy</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Portföy Detayları</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/team`}>Takım</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/team-details`}>Takım Detayları</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/testimonials`}>Referanslar</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/pricing`}>Fiyatlandırma</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/faq`}>SSS</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/error`}>Hata</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Blog</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/blog`}>Blog</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/blog-grid`}>Blog Grid</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/blog-list`}>Blog Listesi</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/blog-standard`}>Standart Blog</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}>Blog Detayları</Link></li>
                        </ul>
                    </li>
                    <li><Link to={process.env.PUBLIC_URL + `/contact`}>İletişim</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
