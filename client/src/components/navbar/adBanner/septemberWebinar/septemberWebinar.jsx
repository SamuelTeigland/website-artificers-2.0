import './septemberWebinar.css';
import { Close } from '../../../../icons/icons';
import { useState } from 'react';

export default function SeptemberWebinar() {
    const [ isVisible, setVisible ] = useState(true);

    return (
        <div className={ isVisible === true ? 'webinar__container shown__banner' : 'webinar__container hidden__banner' }>
            <div className='webinar__svg--container' onClick={ () => {
                setVisible(false);
            }}>
                <Close />
            </div>
            <div className='webinar__message--container'>
                <p className='webinar__paragraph'>Are you a business owner? Learn some simple techniques for improving your website. <span>Join our FREE webinar on September 7th! Seriously, it's free.</span> We hope to see you there!</p>
                <a href='https://bit.ly/4cVU4RY' target="_blank" rel="noopener noreferrer">
                    <button className='webinar__button button__secondary'>Join us!</button>
                </a>
            </div>
        </div>
    )
}