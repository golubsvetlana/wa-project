import './scss/Contact_form.scss'
import React from 'react';
import './scss/media-mixins.scss'



export const FormInputs = () => {
    return (
        
        <>
            <input
                className="input-name" 
                type="text" 
                name="username" 
                placeholder="Name" required />
            <input 
                className="input-email"  
                type="email" 
                name="email" 
                placeholder="Email" required/>
            <input 
                className="input-phone"  
                type="text" 
                name="phone" 
                placeholder="Phone" />
            <textarea 
                className="input-message"  
                type="text" 
                name="message" 
                placeholder="Type your message..." />
            <button 
                type="submit" 
                name="submit-btn">Submit</button>
        </>
    )
  
}