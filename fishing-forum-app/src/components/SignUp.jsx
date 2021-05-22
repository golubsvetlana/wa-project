import React from 'react';

import '../components/scss/SignUp.scss'


export const SignPage = () => {

    return (
        <>
            <div className="content">
             <div className="signup-wrap">
                <h2 className="page__title">Sign Up</h2>
                <h3 className="page__subtitle">Already a member? <a className="page__link" href="/login">Log In</a></h3>
                <button className="btn-form" onClick={() => {
                    let signUpForm = document.querySelector('.signup-form')
                    signUpForm.classList.add('signup-form__active')
                    let btnForm = document.querySelector('.btn-form')
                    btnForm.setAttribute('style', 'display: none')
                }}>Sign up with email</button>
            </div>
            <form className="signup-form">
                <label className="email-input-label" htmlFor="email">Email</label>
                <input className="email-input" type="email" name="email" required/>
                <label className="pswd-input-label" htmlFor="password">Password</label>
                <input className="pswd-input" type="password" name="password" required/>
                <button type="submit" className="btn-signup">Sign up</button>
            </form>   
            </div>
            
   
        </>
    )
}

export const LoginPage = () => {

    return (
        <>
        <div className="content">
            <div className="login-wrap">
                <h2 className="page__title">Log In</h2>
                <h3 className="page__subtitle">New to this site? <a className="page__link" href="/signup">Sign Up</a></h3>
                <button className="btn-form" onClick={() => {
                    let signUpForm = document.querySelector('.login-form')
                    signUpForm.classList.add('login-form__active')
                    let btnForm = document.querySelector('.btn-form')
                    btnForm.setAttribute('style', 'display: none')
                }}>Log in with email</button>
            </div>
            <form className="login-form">
            <label className="email-input-label" htmlFor="email">Email</label>
                <input className="email-input" type="email" name="email" required/>
                <label className="pswd-input-label" htmlFor="password">Password</label>
                <input className="pswd-input" type="password" name="password" required/>
                <button type="submit" className="btn-login">Log In</button>
            </form>
        </div>
        </>
    )
}
