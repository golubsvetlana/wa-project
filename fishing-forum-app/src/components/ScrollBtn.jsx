import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import './scss/ScrollBtn.scss'

export const ScrollBtn = () => {
    return (
        <Link 
            onClick={
        (e) => {
            e.preventDefault();
            scroll.scrollToTop()
        }
        }
        className="scrollTop-btn" to='#'>&#8743;
    </Link>)
 }