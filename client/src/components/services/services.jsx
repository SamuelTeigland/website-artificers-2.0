import './services.css';

export default function Services() {
    return (
        <div className="services__container" id='services'>
            <h2 className='services__header'>Apps, websites, logos & more</h2>
            <p className='services__paragraph'>Whether you need an entirely new website, help with logos, social media, SEO, design, or website management, we have you covered. <span>Websites are our specialty!</span></p>
            <div className='services__subcontainer'>
                <a className='services__link' href="/#pricing">
                    <button className='services__button button__primary'>Interested?</button>
                </a>
                <a className='services__link' href="/#contact-us">
                    <button className='services__button button__tertiary'>Contact us</button>
                </a>
            </div>
        </div>
    )
}