import './navbar.css';
import { DarkLogo, Hamburger } from '../../icons/icons';
// import { SeptemberWebinar } from './adBanner/adBanner';
import { useState } from 'react';

export default function Navbar() {
    const [ isVisible, setVisible ] = useState(false);

    return (
        <div className='navbar__sticky'>
            <div className='navbar__container'>
                <a className='navbar__logo--container' href="/">
                    <DarkLogo />
                </a>
                <div className='navbar__link--container'>
                    <a className='navbar__link' href='/#how-it-works'>How it works</a>
                    <a className='navbar__link' href='/#benefits'>Benefits</a>
                    <a className='navbar__link' href='/#services'>Services</a>
                    <a className='navbar__link' href='/#pricing'>Pricing</a>
                    <a className='navbar__link' href='/#contact-us'>Contact us</a>
                    <a className='navbar__link orange__link' href='https://pay.websiteartificers.com/p/login/cN2eWu8HIeZD6GY5kk'>Login</a>
                    <a className='navbar__link blue__link' href='https://skool.com/website-artificers/about' target="_blank" rel="noopener noreferrer">Learn coding</a>
                </div>
                <div
                    onClick={() => { setVisible(!isVisible); }} className='navbar__hamburger--container'
                >
                    <Hamburger />
                </div>
            </div>
            <div className={ isVisible === true ? 'hidden__menu--container shown__menu' : 'hidden__menu--container hidden__menu' }>
                    <a className='hidden__menu--link' href='/#how-it-works' onClick={() => { setVisible(!isVisible); }}>How it works</a>
                    <a className='hidden__menu--link' href='/#benefits' onClick={() => { setVisible(!isVisible); }}>Benefits</a>
                    <a className='hidden__menu--link' href='/#services' onClick={() => { setVisible(!isVisible); }}>Services</a>
                    <a className='hidden__menu--link' href='/#pricing' onClick={() => { setVisible(!isVisible); }}>Pricing</a>
                    <a className='hidden__menu--link' href='/#contact-us' onClick={() => { setVisible(!isVisible); }}>Contact us</a>
                    <a className='hidden__menu--link orange__menu' href='https://pay.websiteartificers.com/p/login/cN2eWu8HIeZD6GY5kk' onClick={() => { setVisible(!isVisible); }}>Login</a>
                    <a className='hidden__menu--link blue__menu' href='https://skool.com/website-artificers/about' target="_blank" rel="noopener noreferrer" onClick={() => { setVisible(!isVisible); }}>We teach programming</a>
            </div>
        </div>
    )
}