import React from 'react';
import './footer.scss';
import FooterDots from '../../assets/images/dots-footer.png'
import Phone from '../../assets/images/phone.png';

export default props => {
    return(
        <div className="footer">
            <img className="footer-dots" src={FooterDots} alt="dots"/>
            <p className="footer-copyright center">Copyright © 2014 Sweet Corner. All rights reserved.</p>
            <img src={Phone} alt="phone-icon"/>
            <p className="footer-phone">800 264-2099</p>
        </div>
    )
}