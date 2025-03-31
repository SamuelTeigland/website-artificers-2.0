import './contactUs.css';

export default function ContactUs() {
    return (
        <div className="contact__container" id="contact-us">
            <h2 className='contact__header'><span className='contact__header--span1'>Got questions?</span> Or want to see if the Website Artificers are right for you? <span className='contact__header--span2'>(We totally are, btw)</span></h2>
            <div className='contact__subcontainer'>
                <div className='contact__subcontainer--cell'>
                    <h3 className='contact__subcontainer--header'>Guided tour</h3>
                    <p className='contact__subcontainer--paragraph'>Get a guided tour through The Website Artificers' platform, and find out how you and your team can change your online presence, <span>forever.</span></p>
                    <a className='contact__subcontainer--link' href='https://calendly.com/websiteartificers/30min' target="_blank" rel="noopener noreferrer">
                        <button className='contact__subcontainer--button button__primary'>Schedule a call</button>
                    </a>
                </div>
                <div className='contact__subcontainer--cell'>
                    <h3 className='contact__subcontainer--header'>Questions?</h3>
                    <p className='contact__subcontainer--paragraph'>Got questions? We're here to answer them! Just shoot us an email, and we'll do our best to reply within <span>24 hrs or less.</span></p>
                    <a className='contact__subcontainer--link' href='mailto:contact@websiteartificers.com' target="_blank" rel="noopener noreferrer">
                        <button className='contact__subcontainer--button button__primary'>Email us</button>
                    </a>
                </div>
            </div>
        </div>
    )
}