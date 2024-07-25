import './benefits.css';
import { Design, Fast, Grow, Money, Quality, Unique } from '../../icons/icons';

export default function Benefits() {
    return (
        <div className='benefits__container' id='benefits'>
            <h2 className='benefits__header'>Membership benefits</h2>
            <p className='benefits__paragraph'>Perks so good you'll never need to go anywhere else for you website. <span>Seriously. It's true!</span></p>
            <div className='benefits__subcontainer'>
                <div className='benefits__subcontainer--cell'>
                    <Design />
                    <h3 className='benefits__subcontainer--cell__header'>Design board</h3>
                    <p className='benefits__subcontainer--cell__paragraph'>Easily manage the work you need to be done with a Trello board.</p>
                </div>
                <div className='benefits__subcontainer--cell'>
                    <Fast />
                    <h3 className='benefits__subcontainer--cell__header'>Lightning fast delivery</h3>
                    <p className='benefits__subcontainer--cell__paragraph'>Get your website work one at a time in just a few days on average.</p>
                </div>
                <div className='benefits__subcontainer--cell'>
                    <Money />
                    <h3 className='benefits__subcontainer--cell__header'>Fixed monthly rate</h3>
                    <p className='benefits__subcontainer--cell__paragraph'>No surprises here! Pay the same price every month. No hidden fees or gimmicks.</p>
                </div>
                <div className='benefits__subcontainer--cell'>
                    <Quality />
                    <h3 className='benefits__subcontainer--cell__header'>Top-notch quality</h3>
                    <p className='benefits__subcontainer--cell__paragraph'>Insane website quality at your fingertips whenever you need it.</p>
                </div>
                <div className='benefits__subcontainer--cell'>
                    <Grow />
                    <h3 className='benefits__subcontainer--cell__header'>Flexible and scalable</h3>
                    <p className='benefits__subcontainer--cell__paragraph'>Scale up or down as needed, and pause or cancel at anytime.</p>
                </div>
                <div className='benefits__subcontainer--cell'>
                    <Unique />
                    <h3 className='benefits__subcontainer--cell__header'>Unique and all yours</h3>
                    <p className='benefits__subcontainer--cell__paragraph'>All over your designs is made especially for you and is 100% yours.</p>
                </div>
            </div>
        </div>
    )
}