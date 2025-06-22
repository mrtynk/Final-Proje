import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogCategory extends React.Component {
    render() {
        return (
            <>
                <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Kategoriler</h3>
                    <ul className="sidebar__category-list">
                        <li><Link to={process.env.PUBLIC_URL + `/`}>İç Mekan <span>(12)</span></Link></li>
                        <li className="active"><Link to={process.env.PUBLIC_URL + `/`}>Konutsal <span>(10)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Planlama <span>(14)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Endüstriyel <span>(08)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Fabrika <span>(06)</span></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
