import './footer.css';
import { DarkLogo } from '../../icons/icons'

export default function Footer() {
    return (
        <div className='footer__container'>
            <a href='/' className='footer__container--link'>
                <DarkLogo />
            </a>
            <div className='footer__subcontainer--links'>
                <a href='/'>Home</a>
                <a href="/privacy.html">Privacy</a>
                <a href='/#pricing'>Pricing</a>
                <a href='/#contact-us'>Contact</a>
            </div>
            <div className='footer__subcontainer'>
                <p className='footer__paragraph'>Crafted with passion by <a href='/'>Website Artificers</a> © 2024</p>
            </div>
        </div>
    )
}