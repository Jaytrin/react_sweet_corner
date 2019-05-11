import React from 'react';
import './header.scss';
import Nav from '../nav';

export default props => {
    return(
        <div className="header-container">
            <div className="nav-header"></div>
            <Nav />
            <div className="header-img"></div>
            <h2 className="header-title">We deliver cupcakes for the important events in your life!</h2>
            <div className="header-bottom"></div>
        </div>
    )
}