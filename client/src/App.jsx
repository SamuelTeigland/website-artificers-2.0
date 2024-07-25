import { Hero, Fix, Review, Benefits, Services, Pricing, ContactUs, Facebook } from './components/components';

export default function App() {
    return (
        <div className='home__container'>
            <Facebook />
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