import React from 'react';
import {Link} from 'react-router-dom';

export default class FeatureFour extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                {/* Start Feature Four */}
                <section className="feature-four">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>ÖZELLİKLERİMİZ</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">En İyi Özelliklerimiz</h2>
                        </div>
                        <div className="row">
                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single">
                                    <div className="feature-four__single-img">
                                        <img src={publicUrl+"assets/images/update1.0/feature-v3-img1.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single style2 text-center">
                                    <div className="feature-four__single-icon">
                                        <span className="icon-interior-design-1"></span>
                                    </div>
                                    <div className="feature-four__single-content">
                                        <span>ÖZELLİKLERİ KEŞFEDİN</span>
                                        <h2><Link to={process.env.PUBLIC_URL + `/services`}>Ev Planlama</Link></h2>
                                        <p>Hataya düşmüş, rastgele kelimeler veya mizah içeren birçok farklı pasaj vardır.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single">
                                    <div className="feature-four__single-img">
                                        <img src={publicUrl+"assets/images/update1.0/feature-v3-img2.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single style2 text-center">
                                    <div className="feature-four__single-icon">
                                        <span className="icon-crane"></span>
                                    </div>
                                    <div className="feature-four__single-content">
                                        <span>ÖZELLİKLERİ KEŞFEDİN</span>
                                        <h2><Link to={process.env.PUBLIC_URL + `/services`}>Kömür Kazısı</Link></h2>
                                        <p>Hataya düşmüş, rastgele kelimeler veya mizah içeren birçok farklı pasaj vardır.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single">
                                    <div className="feature-four__single-img">
                                        <img src={publicUrl+"assets/images/update1.0/feature-v3-img3.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single style2 text-center">
                                    <div className="feature-four__single-icon">
                                        <span className="icon-painting"></span>
                                    </div>
                                    <div className="feature-four__single-content">
                                        <span>ÖZELLİKLERİ KEŞFEDİN</span>
                                        <h2><Link to={process.env.PUBLIC_URL + `/services`}>İç Tasarım</Link></h2>
                                        <p>Hataya düşmüş, rastgele kelimeler veya mizah içeren birçok farklı pasaj vardır.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}
                        </div>
                    </div>
                </section>
                {/* End Feature Four */}
            </>
        )
    }
}
