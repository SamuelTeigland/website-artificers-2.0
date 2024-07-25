import { Hero, Fix, Review, Benefits, Services, Pricing, ContactUs, Facebook } from './components/components';
import ReactGA from 'react-ga4';

export default function App() {
    ReactGA.initialize('G-BY6RR52CSJ');

    ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Home Page",
    })

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