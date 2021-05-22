import React from 'react';

import './scss/Contact.scss'
import './scss/Contact_form.scss'
import { FormInputs } from './ContactForm.jsx'
import img from './img/contact/82fcd3_3a631b9f2af545febc532bcac5c321f5_mv2_d_4256_2832_s_4_2.webp'
import './scss/media-mixins.scss'
import {ScrollBtn} from './ScrollBtn.jsx'

let formClass = "contact-form contact-form__dark"

export const Contact = () => {
    return (
        <>
         {ScrollBtn()}   
        <div className="content-wrap">
        <div className="text-wrap">
            <img src={img} className="img-back" alt=""></img>
            <div className="contact-text">
                <span className="contact-text__title">Stay <br /> in <br /> Touch</span>
                <p className="contact-text__content">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
        </div>
        <form className={formClass}>
            <FormInputs />
        </form>
    </div>
    </>
        
        
        
    )
}
