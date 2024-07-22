import './navbar.css';
import { DarkLogo, Hamburger } from '../../icons/icons'
import { useState } from 'react';

export default function Navbar() {
    const [ isVisible, setVisible ] = useState(false);

    return (
        <div>
            <div className='navbar__container'>
                <a className='navbar__logo--container' href="/">
                    <DarkLogo />
                </a>
                <div className='navbar__link--container'>
                    <a className='navbar__link'>How it works</a>
                    <a className='navbar__link'>Benefits</a>
                    <a className='navbar__link'>Services</a>
                    <a className='navbar__link'>Pricing</a>
                    <a className='navbar__link orange__link'>Contact us</a>
                    <a className='navbar__link blue__link'>Login</a>
                </div>
                <div
                    onClick={() => { setVisible(!isVisible); }} className='navbar__hamburger--container'
                >
                    <Hamburger />
                </div>
            </div>
            <div className={ isVisible === true ? 'hidden__menu--container shown__menu' : 'hidden__menu--container hidden__menu' }>
                    <a className='hidden__menu--link'>How it works</a>
                    <a className='hidden__menu--link'>Benefits</a>
                    <a className='hidden__menu--link'>Services</a>
                    <a className='hidden__menu--link'>Pricing</a>
                    <a className='hidden__menu--link orange__menu'>Contact us</a>
                    <a className='hidden__menu--link blue__menu'>Login</a>
            </div>
        </div>
    )
}