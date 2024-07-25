import { Hero, Fix, Review, Benefits, Services, Pricing, ContactUs } from './components/components';

export default function App() {
    return (
        <div className='home__container'>
            <Hero />
            <Fix />
            <Review />
            <Benefits />
            <Services />
            <Pricing />
            <ContactUs />
        </div>
    )
}