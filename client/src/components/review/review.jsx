import './review.css'

export default function Review() {
    return (
        <div className='review__container'>
            <p className='review__top--paragraph'>They said it best</p>
            <h2 className='review__header'>"We are extremely pleased with the work of Website Artificers."</h2>
            <p className='review__paragraph'><span>It's so good, you'll never want to go back.</span> The Website Artificers replace unreliable freelancers and expensive agencies for one flat monthly fee, with websites delivered so fast that it will blow your mind.</p>
            <div className='review__button--container'>
                <a className='review__button--link'>
                    <button className='review__button button__secondary'>See plans</button>
                </a>
            </div>
            <div className='review__subcontainer'>
                <div className='review__subcontainer--review'>
                    <div className='review__subcontainer--subcontainer__review'>
                        <p className='review__subcontainer--subcontainer__review--paragraph'>"The Website Artificers are very knowledgeable and prompt to responding to client needs."</p>
                    </div>
                    <div className='review__subcontainer--subcontainer__flex'>
                        <div className='review__subcontainer--subcontainer__flex--child'>
                            <h3 className='review__subcontainer--subcontainer__header'>J.D. Hopkins</h3>
                            <p className='review__subcontainer--subcontainer__paragraph'>Owner</p>
                        </div>
                        <div className='review__subcontainer--subcontainer__flex--child review__image'>
                            <img className='review__subcontainer--subcontainer__image' src="/images/dms.png" alt="Delaware Moving and Storage" />
                        </div>
                    </div>
                </div>
                <div className='review__subcontainer--overview'>
                    <div className='review__subcontainer--subcontainer--overview'>
                        <h3>Totally asyncronous</h3>
                        <p>Don't like meetings? No worries. We don't require you to meet with us to get your money's worth.</p>
                    </div>
                    <div className='review__subcontainer--subcontainer--overview'>
                        <h3>Manage with Trello</h3>
                        <p>Manage your work orders using Trello. View active, queued, and completed tasks with ease.</p>
                    </div>
                    <div className='review__subcontainer--subcontainer--overview'>
                        <h3>Invite your team</h3>
                        <p>Invite your entire team, so anyone can submit requests and track their progress.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}