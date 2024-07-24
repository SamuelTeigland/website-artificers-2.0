import './fix.css';
import { Package, Repeat, Revise } from '../../icons/icons';

export default function Fix() {
    return (
        <div className='fix__container'>
            <h2 className='fix__header'>Building a website is easier said than done. <span>We fixed that.</span></h2>
            <p className='fix__paragraph'>Just say the word, and we get it done. Website development as you know it is out the door. Website development as you want it is here.</p>
            <div className='fix__svg--container'>
                <div className='fix__subcontainer'>
                    <Repeat />
                    <p className='fix__subcontainer--paragraph'>Subscribe to a plan and request as much website work as you'd like.</p>
                </div>
                <div className='fix__subcontainer'>
                    <Package />
                    <p className='fix__subcontainer--paragraph'>Receive your design within two business days on average.</p>
                </div>
                <div className='fix__subcontainer'>
                    <Revise />
                    <p className='fix__subcontainer--paragraph'>We'll revise our work until you're 100% satisfied.</p>
                </div>
            </div>
            <div className="fix__link--container">
                <a className='fix__link'>
                    <button className='fix__button button__secondary'>See plans</button>
                </a>
            </div>
        </div>
    )
}