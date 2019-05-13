import React from 'react';
import './footer.scss';
import FooterDots from '../../assets/images/dots-footer.png'
import Phone from '../../assets/images/phone.png';

export default props => {
    return(
        <div className="footer">
            <div className="footer-left">
                <img className="footer-dots" src={FooterDots} alt="dots"/>
            </div>
            <div className="footer-right">
                <img className="phone-icon" src={Phone} alt="phone-icon"/>
                <p className="footer-phone">800 264-2099</p>
            </div>
            <div className="footer-center">
                <p className="footer-copyright">Copyright © 2014 Sweet Corner. All rights reserved.</p>
            </div>
        </div>
    )
}