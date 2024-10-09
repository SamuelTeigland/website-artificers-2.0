import './footer.css';
import { DarkLogo } from '../../icons/icons'
import { NavLink as Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className='footer__container'>
            <a href='/' className='footer__container--link'>
                <DarkLogo />
            </a>
            <div className='footer__subcontainer--links'>
                <a href='/'>Home</a>
                <Link to="/privacy">Privacy</Link>
                <a href='/#pricing'>Pricing</a>
                <a href='/#contact-us'>Contact</a>
            </div>
            <div className='footer__subcontainer'>
                <p className='footer__paragraph'>Crafted with passion by <a href='/'>Website Artificers</a> © 2024</p>
            </div>
        </div>
    )
}