import React from 'react';
import {Link} from 'react-router-dom';

export default class ButtonBox extends React.Component {
    render(){
        return (
            <>
                <div className="services-details__sidebar-single services-details-button-box">
                    <div className="btn-one">
                        <Link to={process.env.PUBLIC_URL + `/`}>Doküman İndir <span className="fa fa-download"></span></Link>
                    </div>

                    <div className="btn-one btn-one--two">
                        <Link to={process.env.PUBLIC_URL + `/`}>PDF İndir <span className="fa fa-file-pdf"></span></Link>
                    </div>
                </div>
            </>
        )
    }
}
