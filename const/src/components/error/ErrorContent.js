import React from 'react';
import {Link} from 'react-router-dom';

export default class ErrorContent extends React.Component {
    render(){
        return (
            <>
                <div className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__wrapper text-center">
                                    <div className="error-page__content">
                                        <h2>404</h2>
                                        <h3>Hata! Sayfa Bulunamadı</h3>
                                        <p>Üzgünüz, aradığınız sayfa mevcut değil.</p>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Anasayfaya Dön +">Anasayfaya Dön
                                                +</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
