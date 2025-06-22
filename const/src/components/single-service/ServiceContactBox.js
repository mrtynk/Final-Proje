import React from 'react';

export default class ServiceContactBox extends React.Component {
    render(){
        return (
            <>
                <div className="services-details__sidebar-single services-details-contact-box">
                    <div className="title">
                        <h2>Yardıma mı ihtiyacınız var?</h2>
                    </div>
                    <p>Küçük bir zahmet, deneyimli ekibimizle iletişime geçin. Size en iyi hizmeti sunmak için buradayız.</p>
                    <div className="number">
                        <a href="tel:123456789"><span className="icon-phone-call"></span>666-555-999-00</a>
                    </div>
                </div>
            </>
        )
    }
}
