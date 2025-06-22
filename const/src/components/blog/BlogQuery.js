import React from 'react';

export default class BlogQuery extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="sidebar__single sidebar__support">
                    <div className="sidebar__support-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/sidebar-support-bg.jpg)'}}></div>
                    <h3 className="sidebar__suppot-title">Herhangi Bir Sorunuz Mu Var?</h3>
                    <p className="sidebar__suppot-text">Harika meyve otu, onların üzerinde ilk ruh vardır, çok alçakgönüllüdür</p>
                    <div className="sidebar__support-btn-box">
                        <button className="thm-btn" data-text="Mesaj Gönder +" type="submit" data-loading-text="Lütfen bekleyin...">Mesaj Gönder +</button>
                    </div>
                </div>
            </>
        )
    }
}
