import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogTags extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Etiket Bulutu</h3>
                    <ul className="sidebar__tags-list">
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Proje</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Tasarım</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Sanat</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>İllüstrasyon</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Sevgi</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
