import './hero.css';

export default function Hero() {
    return (
        <div className='hero__container'>
            <h1 className='hero__header'>Website development made <span>easier.</span></h1>
            <p className='hero__paragraph'>Build and maintain a website that fits your needs. Pause or cancel anytime.</p>
            <div className='hero__button--container'>
                <a className='hero__button--link' href='/#contact-us'>
                    <button className='hero__button button__primary'>Contact us</button>
                </a>
                <a className='hero__button--link' href='/#pricing'>
                    <button className='hero__button button__secondary' href='/#pricing'>See plans</button>
                </a>
            </div>
            <div className='hero__logos--container'>
                <a href='https://amanipartners.org/' target="_blank" rel="noopener noreferrer">
                    <img src="/images/amani.png" alt="Amani Partners Kenya" id="amani__logo" className='hero__logo' />
                </a>
                <a href='https://delawareav.com/' target="_blank" rel="noopener noreferrer">
                    <img src="/images/dav.png" alt="Delaware Audio Visual" id="dav__logo" className='hero__logo' />
                </a>
                <a href='https://delawaremovingandstorage.com/' target="_blank" rel="noopener noreferrer">
                    <img src="/images/dms.png" alt="Delaware Moving and Storage" id="dms__logo" className='hero__logo' />   
                </a>
                <a href='https://cowsofdelaware.com/' target="_blank" rel="noopener noreferrer">
                    <img src="/images/cows.png" alt="COWs of Delaware" id="cows__logo" className='hero__logo' />
                </a>
            </div>
        </div>
    )
}