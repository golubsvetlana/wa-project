import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

import './scss/Home.scss'
import './scss/Contact_form.scss'
import './scss/media-mixins.scss'
import {ScrollBtn} from './ScrollBtn.jsx'
import { FormInputs } from './ContactForm.jsx'
import {Responsive} from '../components/SlideShow.jsx'



let formClass = "contact-form contact-form__light"


export const Home = () => {
    return (
        <>
          {ScrollBtn()}
            <div className="image-block image-block__item-1">
                <div className="home-title-wrap">
                    <h1 className="home-title__title">OFF <br />
                                        THE<br/>
                                        HOOK<br/></h1>
                    <h2 className="home-title__subtitle">Fishing Forum &amp; Blog</h2>
                </div>
            </div>
            <div className="image-block image-block__item-2">
                <div className="image-block-text image-block-text__item1">
                    <span className="image-block-text__title">Explore <br/>
                        The <br/>
                        Forum</span>
                    <p className="image-block-text__content">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                </div>
               
                <Link onClick={
                    (e) => {
                        e.preventDefault();
                        scroll.scrollToTop()
                    }
                    }
                    className="image-block-btn image-block-btn__item1" to='#'>Discuss Fishing
                </Link>
                
                <div className="block-count block-count__item1">
                    <span className="block-count__text">01</span>
                </div>
                
            </div>

            <div className="image-block image-block__item-3">
                <div className="image-block-text image-block-text__item2">
                    <span className="image-block-text__title">Read <br/>
                        Our <br/>
                        Blog</span>
                    <p className="image-block-text__content">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                </div>
                <Link
                    className="image-block-btn image-block-btn__item2" to='/blog'>Discover More
                </Link>
                <div className="block-count block-count__item2">
                    <span className="block-count__text">02</span>
                </div>
            </div>
            <div className="image-block image-block__item-4">
                <div className="image-block-text image-block-text__item3">
                    <span className="image-block-text__title">Stay <br/>
                        In <br/>
                        Touch</span>
                    <p className="image-block-text__content">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                </div>
                <div className="block-count block-count__item3">
                    <span className="block-count__text">03</span>
                </div>
                <form className={formClass}>
                    <FormInputs />
                </form> 
            </div>

      <Responsive/>
        
            <form className='subscribe-form' action="POST">
                <label className='subscribe-form__title' htmlFor="email">Never Miss a Thread</label>
                <input className='subscribe-form__input' name="subscribe_email"  type="email" placeholder="Enter your email here*" required aria-label="Enter your email here*"/>
                <button className='subscribe-form__btn' onClick={(e) => {
                    e.preventDefault();
                    let email = document.querySelector('.subscribe-form__input')
                    //console.log(email.value)
                    
                    if (email.value) {
                        alert(`Thank you ${email.value}! You are subscribed now!`)
                    } else {
                        email.setAttribute('style', 'border-bottom: 2px solid red')
                    }
                    
                }}>Subscribe</button>
            </form>
        
       
            
            
        </>
    )
        
          
        
}

