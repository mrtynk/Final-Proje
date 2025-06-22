import React from 'react';

export default class PortfolioNewsletter extends React.Component {
    render(){
        return (
            <>
                <div className="protfolio-details__sidebar-single protfolio-details-newsletter">
                    <div className="title">
                        <h2>Bülten</h2>
                    </div>

                    <div className="newsletter-box">
                        <form className="newsletter-form black_ver" action="#">
                            <input type="email" name="email" placeholder="E-posta Adresi" />
                            <button className="thm-btn" data-text="Abone Ol +" type="submit">Abone Ol +</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
