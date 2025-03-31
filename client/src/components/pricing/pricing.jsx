import './pricing.css';
import ReactGA from 'react-ga4';

export default function Pricing() {
    ReactGA.initialize('G-BY6RR52CSJ');

    return (
        <div className='pricing__container' id='pricing'>
            <div className='pricing__subcontainer'>
                <div className='pricing__subcontainer--cell'>
                    <div className='pricing__slots--container'>
                        <p className='pricing__slots--paragraph'>✓ Slots available!</p>
                    </div>
                    <h2 className='pricing__join--header'>Join The Website Artificers</h2>
                    <p className='pricing__join--paragraph'>Put your website problems in the past!</p>
                    <div className='pricing__call--container'>
                        <a className='pricing__call--link' href='https://calendly.com/websiteartificers/30min' target="_blank" rel="noopener noreferrer">
                            <h3 className='pricing__call--header'>Book a 30-min intro call!</h3>
                            <p className='pricing__call--paragraph'>Learn more about how we work and how we can help you. →</p>
                        </a>
                    </div>
                    <div className='pricing__call--container'>
                        <a className='pricing__call--link' href='mailto:contact@websiteartificers.com' target="_blank" rel="noopener noreferrer">
                            <h3 className='pricing__call--header'>Prefer to email?</h3>
                            <p className='pricing__call--paragraph'>Email <span>contact@websiteartificers.com</span> with any questions! →</p>
                        </a>
                    </div>
                </div>
                <div className='pricing__subcontainer--cell pricing__right--cell'>
                    <div className='pricing__bottom--border'>
                        <h2 className='pricing__membership--header'>Yearly Plan</h2>
                        <h2 className='pricing__membership--price'>$800<span>/yr</span></h2>
                        <h3 className='pricing__membership--subheader'>Plus a one-time <span>$200</span> onboarding fee.</h3>
                    </div>
                    
                    <h4 className='pricing__membership--features'>What's included?</h4>
                    <div className='pricing__membership--features__container'>
                        <p>• Average 48 hour delivery</p>
                        <p>• Pause or cancel anytime</p>
                        <p>• Unlimited users</p>
                        <p>• Unlimited website size</p>
                        <p>• Back and front end development</p>
                        <p>• Design, SEO, and website management</p>
                    </div>
                    <div className='pricing__membership--cta__container'>
                        <a className='pricing__membership--cta__container--link' href='https://pay.websiteartificers.com/b/3csbLN4Ld4r3b8A6or'>
                            <button className='pricing__membership--cta__button button__tertiary'>Get started</button>
                        </a>
                        <p>or</p>
                        <a href='https://calendly.com/websiteartificers/30min' target="_blank" rel="noopener noreferrer" className='pricing__membership--cta__container--link'>
                            Book a call
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
