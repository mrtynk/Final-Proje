import React from 'react';
import {Link} from 'react-router-dom';

export default class PortfolioTag extends React.Component {
    render(){
        return (
            <>
                <div className="protfolio-details__sidebar-single protfolio-details-tags clearfix">
                    <div className="title">
                        <h2>Etiket Bulutu</h2>
                    </div>
                    <ul className="protfolio-details-tags-list">
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Proje</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Tasarım</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Sevgi</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Sanat</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>İllüstrasyon</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Android</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Seyahat</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Teknoloji</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
