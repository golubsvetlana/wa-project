import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './scss/Header.scss';
import './scss/media-mixins.scss';
/*icons*/
import user from './img/icons/user.svg'
import facebook from './img/social/facebook.svg'
import youtube from './img/social/youtube.svg'
import instagram from './img/social/instagram.svg'
import logo from './img/icons/main-logo.svg'
import menu from './img/icons/bx_bx-menu.svg'

export const Header = () => {
    return (
        <header className='header-menu-wrap'>
        <div className="header-logo">
        <img src={logo}
                        className="header-logo__icon"
                        alt=""
                    />
                <Link to="/" className="header-logo__link"
                    ><h2 className="header-title">OFF THE HOOK</h2></Link>
                
            </div>

            <nav className="nav-menu">
            <button className="login-btn login-btn__hidden">
                    <img src={user}
                        
                        className="icon-item__link-img login-btn__icon"
                        alt=""
                    />
                    <a href='/signup' className="btn-title">Log In</a>
                </button>
                <NavLink
                    aria-current="page"
                    exact to="/"
                    className="nav-menu__link"
                    activeClassName="nav-menu__link-active">Home
                </NavLink>
                <NavLink 
                    to="/blog" 
                    className="nav-menu__link"
                    activeClassName="nav-menu__link-active">Blog
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className="nav-menu__link"
                    activeClassName="nav-menu__link-active">Contact
                </NavLink>

            </nav>
            <button className="nav-menu__toggle" onClick={() => {
                //e.preventDefault();
                let menuBtn = document.querySelector('.nav-menu')
                menuBtn.classList.toggle('nav-menu__active')
            }}><img src={menu} alt="" /></button>
            <div className="icons-wrap">
                <button className="login-btn">
                    <img src={user}
                        
                        className="icon-item__link-img login-btn__icon"
                        alt=""
                    />
                    <a href='/signup' className="btn-title">Log In</a>
                </button>
                <div className="social-icons-wrap">
                <a rel="noreferrer" target="_blank" href="https://facebook.com" className="icon-item__link"
                    ><img
                        src={facebook}
                        className="icon-item__link-img"
                        alt="facebook"
                    /></a>
                <a rel="noreferrer" target="_blank" href="https://youtube.com" className="icon-item__link"
                    ><img
                        src={youtube}
                        className="icon-item__link-img"
                        alt="youtube"
                /></a>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/oth_fishingforum/" className="icon-item__link"
                    ><img
                        src={instagram}
                        className="icon-item__link-img"
                        alt="instagram"
                        /></a>
              </div>              
                
            </div>
      </header>
    );
};


