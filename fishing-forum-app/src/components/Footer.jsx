import React from 'react';
import { Link } from 'react-router-dom';
import './scss/Footer.scss';
import './scss/grid.scss';
import './scss/media-mixins.scss'

import fcbk_icon from './img/social/facebook-grey.svg';
import youtbe_icon from './img/social/youtube-grey.svg';
import insta_icon from './img/social/instagram-grey.svg';

const footer =
    <div className="footer-wrap">
        <div className="grid">
        <div className="grid-item col-10 col-xs-16 item1">
                <span className="footer-text footer-text__large">Find Us On</span>
                <div className="link-icons-wrap">
                    <div className="link-icon">
                        <a rel="noreferrer" target="_blank" href="https://facebook.com" className="item-link">
                            <img src={fcbk_icon} alt="" className="item-link__icon"/>
                        </a>
                    </div>
                    <div className="link-icon">
                        <a rel="noreferrer" target="_blank" href="https://youtube.com" className="item-link">
                            <img src={youtbe_icon} alt="" className="item-link__icon"/>
                        </a>
                    </div>
                    <div className="link-icon">
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/oth_fishingforum/" className="item-link">
                            <img src={insta_icon} alt="" className="item-link__icon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid-item col-6 col-xs-16 item2">
                <div className="follow-wrap">
                    <span className="footer-text footer-text__small">Follow Us on Instagram:</span>
                    <a rel="noreferrer" target="_blank" className="footer-text__link footer-text__link-lg" href='https://www.instagram.com/oth_fishingforum/'>@oth_fishingforum</a>
                </div> 
            </div>

                
        
        <div className="grid-item col-6 col-xs-16 item3">
            <span className="footer-text footer-text__small">©2023 by Off The Hook. <br/>
                                        Proudly created with Wix.com</span>
        </div>
        <div className="grid-item col-4 col-xs-16 item4">
                <Link to="/site-rules-faq" className="footer-text__link footer-text__link-md">Site Rules</Link>
                <Link to="/site-rules-faq" target="_self" className="footer-text__link footer-text__link-md">FAQ</Link>
        </div>
        <div className="grid-item col-6 col-xs-16 item5">
            <span className="footer-text footer-text__small">Tel: 123-456-7890 <br/>
info@mysite.com</span></div>
        </div>
        </div>




export const Footer = () => {
    return (
        footer
    )
}